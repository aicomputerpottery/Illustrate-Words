import type { IWStructure, IWNode, IWEdge } from './types';

// Helper to hash/generate stable node IDs
function generateId(label: string, index: number): string {
  const clean = label.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  return `${clean || 'node'}-${index}`;
}

// Simple rule-based icon mapping
const ICON_MAP: Record<string, string> = {
  insight: 'Lightbulb', idea: 'Lightbulb', brain: 'Lightbulb',
  risk: 'AlertTriangle', warning: 'AlertTriangle', caution: 'AlertTriangle',
  blocker: 'OctagonAlert', stop: 'OctagonAlert', barrier: 'OctagonAlert',
  success: 'Target', goal: 'Target', milestone: 'Target', achievement: 'CheckCircle2',
  time: 'Clock', delay: 'Clock', duration: 'Clock', schedule: 'Clock',
  growth: 'TrendingUp', increase: 'TrendingUp', rise: 'TrendingUp',
  decline: 'TrendingDown', decrease: 'TrendingDown', fall: 'TrendingDown',
  decision: 'GitBranch', branch: 'GitBranch', choice: 'GitBranch',
  user: 'User', customer: 'User', client: 'User',
  team: 'Users', group: 'Users', people: 'Users',
  money: 'Coins', cost: 'Coins', price: 'Coins', budget: 'Coins',
  question: 'HelpCircle', unknown: 'HelpCircle', query: 'HelpCircle',
  info: 'Info', note: 'Info', details: 'Info',
  positive: 'ThumbsUp', pro: 'ThumbsUp', like: 'ThumbsUp',
  negative: 'ThumbsDown', con: 'ThumbsDown', dislike: 'ThumbsDown',
  cycle: 'RefreshCw', loop: 'RefreshCw', iteration: 'RefreshCw',
  bridge: 'ArrowLeftRight', link: 'ArrowLeftRight', connector: 'ArrowLeftRight',
  root: 'Sprout', cause: 'Sprout', source: 'Sprout',
  effect: 'Zap', result: 'Zap', impact: 'Zap'
};

function inferIcon(label: string): string | undefined {
  const words = label.toLowerCase().split(/[^a-z]+/);
  for (const word of words) {
    if (ICON_MAP[word]) {
      return ICON_MAP[word];
    }
  }
  return undefined;
}

function inferRole(label: string): IWNode['role'] {
  const lower = label.toLowerCase();
  
  // Positive cues
  if (/\b(pro|pros|benefit|benefits|advantage|advantages|strength|strengths|opportunity|opportunities|success|gain|gains|on track|approved)\b/.test(lower)) {
    return 'positive';
  }
  // Negative cues
  if (/\b(con|cons|risk|risks|weakness|weaknesses|threat|threats|issue|issues|problem|problems|failure|failures|decline|loss|losses|delayed|blocker)\b/.test(lower)) {
    return 'negative';
  }
  // Warning cues
  if (/\b(caution|cautions|warning|warnings|watch out|note|however|attention)\b/.test(lower)) {
    return 'warning';
  }
  
  return undefined;
}

function inferWeight(label: string): IWNode['weight'] {
  const lower = label.toLowerCase();
  if (/\b(massive|huge|critical|highest|maximum|major|leader|winner|primary)\b/.test(lower)) return 5;
  if (/\b(large|high|important|growing|significant)\b/.test(lower)) return 4;
  if (/\b(small|low|minor|shrinking|trace|tiny|insignificant)\b/.test(lower)) return 2;
  return 3; // Default weight
}

export function parseTextToStructure(text: string, selectedKind?: IWStructure['kind']): IWStructure {
  const rawLines = text.split('\n');
  const cleanText = text.trim();
  const sourceCharCount = text.length;
  
  // Empty state handling
  if (!cleanText) {
    return {
      kind: selectedKind || 'unstructured',
      title: 'Empty Canvas',
      nodes: [],
      edges: [],
      meta: {
        detectedLanguage: 'en',
        confidence: 0,
        sourceCharCount: 0
      }
    };
  }

  // Pass 1: Parse lines and find hierarchy/indentation levels
  const parsedLines = rawLines
    .map(line => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      
      // Calculate indentation (spaces or tabs)
      const indentMatch = line.match(/^([ \t]*)/);
      const indent = indentMatch ? indentMatch[1].replace(/\t/g, '    ').length : 0;
      
      // Remove bullet or list numbering prefix
      const bulletMatch = trimmed.match(/^([\-\*\+•]|\d+[\.\)]|Step\s+\d+[:\-\.]|Phase\s+\d+[:\-\.])\s*(.*)$/i);
      const content = bulletMatch ? bulletMatch[2].trim() : trimmed;
      const isBullet = !!bulletMatch;
      
      return {
        indent,
        rawContent: trimmed,
        content,
        isBullet
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  // Fallback to unstructured if no bullet-like lines
  if (parsedLines.length === 0) {
    return {
      kind: selectedKind || 'unstructured',
      title: 'Quick Notes',
      nodes: [{ id: 'node-0', label: cleanText.slice(0, 140), weight: 3 }],
      edges: [],
      meta: {
        detectedLanguage: 'en',
        confidence: 0.5,
        sourceCharCount
      }
    };
  }

  // Determine Title: If the first line is not a bullet and has no indentation, treat it as the title.
  let title = 'Visualization';
  let subtitle: string | undefined = undefined;
  let startIndex = 0;

  if (parsedLines[0] && !parsedLines[0].isBullet && parsedLines[0].indent === 0) {
    title = parsedLines[0].content;
    startIndex = 1;
    
    // Check if second line is also a non-bullet description
    if (parsedLines[1] && !parsedLines[1].isBullet && parsedLines[1].indent === 0) {
      subtitle = parsedLines[1].content;
      startIndex = 2;
    }
  }

  // Slice lines representing content
  const contentLines = parsedLines.slice(startIndex);

  // If no content lines left, treat the title line as content
  if (contentLines.length === 0) {
    return {
      kind: selectedKind || 'unstructured',
      title: 'Visualization',
      nodes: [{ id: 'node-0', label: title, role: 'primary', weight: 3 }],
      edges: [],
      meta: {
        detectedLanguage: 'en',
        confidence: 0.6,
        sourceCharCount
      }
    };
  }

  // Pass 2: Detect Structure Kind
  let detectedKind: IWStructure['kind'] = 'unstructured';
  let maxIndent = 0;
  let hasNumbering = false;
  let hasCycleKeywords = false;
  let hasCausalKeywords = false;
  let hasComparisonKeywords = false;
  let hasTimelineKeywords = false;
  let hasProblemSolutionKeywords = false;

  const textLower = cleanText.toLowerCase();

  // Keyword check
  if (/\b(loop|cycle|repeat|repeats|recycle|back to)\b/.test(textLower)) {
    hasCycleKeywords = true;
  }
  if (/\b(leads to|causes|results in|therefore|consequently|because of)\b/.test(textLower)) {
    hasCausalKeywords = true;
  }
  if (/\b(versus|vs|pros|cons|compared|on the other hand|advantages|disadvantages|benefits|risks)\b/.test(textLower)) {
    hasComparisonKeywords = true;
  }
  if (/\b(years|months|timeline|january|february|march|q1|q2|q3|q4|phase \d+|step \d+)\b/.test(textLower)) {
    hasTimelineKeywords = true;
  }
  if (/\b(problem|solution|challenge|fix|resolution|barrier|remedy)\b/.test(textLower)) {
    hasProblemSolutionKeywords = true;
  }

  // Check indentation and numbering markers
  contentLines.forEach(line => {
    if (line.indent > maxIndent) maxIndent = line.indent;
    if (/^(\d+[\.\)]|Step\s+\d+|Phase\s+\d+)/i.test(line.rawContent)) {
      hasNumbering = true;
    }
  });

  if (selectedKind) {
    detectedKind = selectedKind;
  } else if (maxIndent >= 2) {
    detectedKind = 'hierarchy';
  } else if (hasCycleKeywords) {
    detectedKind = 'cycle';
  } else if (hasNumbering) {
    detectedKind = 'sequence';
  } else if (hasTimelineKeywords) {
    detectedKind = 'timeline';
  } else if (hasComparisonKeywords) {
    detectedKind = 'comparison';
  } else if (hasCausalKeywords) {
    detectedKind = 'causal';
  } else if (hasProblemSolutionKeywords) {
    detectedKind = 'problem_solution';
  }

  // Pass 3: Construct Nodes and Edges
  const nodes: IWNode[] = [];
  const edges: IWEdge[] = [];
  const activeParentByIndent: Record<number, string> = {};

  contentLines.forEach((line, idx) => {
    const id = generateId(line.content, idx);
    const label = line.content.slice(0, 140);
    const role = inferRole(label);
    const icon = inferIcon(label);
    const weight = inferWeight(label);

    const node: IWNode = {
      id,
      label,
      role,
      icon,
      weight
    };

    // Calculate hierarchical level (depth) based on indentation step
    // Typically: 0 indent = depth 0, 2-4 spaces = depth 1, 6-8 spaces = depth 2, etc.
    let depth = 0;
    if (line.indent > 0) {
      // Find closest standard parent indent
      const indents = Object.keys(activeParentByIndent).map(Number).sort((a, b) => b - a);
      const parentIndent = indents.find(i => i < line.indent);
      if (parentIndent !== undefined) {
        const parentId = activeParentByIndent[parentIndent];
        const parentNode = nodes.find(n => n.id === parentId);
        depth = parentNode && parentNode.depth !== undefined ? parentNode.depth + 1 : 1;
        
        edges.push({
          from: parentId,
          to: id,
          type: 'parent-child'
        });
      } else {
        depth = 1;
      }
    }
    
    node.depth = depth;
    activeParentByIndent[line.indent] = id;
    
    // Clear deeper indents to avoid stale parents
    Object.keys(activeParentByIndent).forEach(k => {
      if (Number(k) > line.indent) {
        delete activeParentByIndent[Number(k)];
      }
    });

    nodes.push(node);
  });

  // Structural linkages based on kind
  if (detectedKind === 'sequence' || detectedKind === 'timeline') {
    // Connect nodes sequentially
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].order = i + 1;
      edges.push({
        from: nodes[i].id,
        to: nodes[i + 1].id,
        type: 'sequence'
      });
    }
    if (nodes.length > 0) {
      nodes[nodes.length - 1].order = nodes.length;
    }
  } else if (detectedKind === 'cycle') {
    // Connect nodes sequentially + loop back
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].order = i + 1;
      edges.push({
        from: nodes[i].id,
        to: nodes[i + 1].id,
        type: 'sequence'
      });
    }
    if (nodes.length > 1) {
      nodes[nodes.length - 1].order = nodes.length;
      edges.push({
        from: nodes[nodes.length - 1].id,
        to: nodes[0].id,
        type: 'cycle-next',
        label: 'repeats'
      });
    }
  } else if (detectedKind === 'causal') {
    // Chain nodes causally
    for (let i = 0; i < nodes.length - 1; i++) {
      edges.push({
        from: nodes[i].id,
        to: nodes[i + 1].id,
        type: 'causes'
      });
    }
  } else if (detectedKind === 'comparison') {
    // If pros/cons structure, group them
    nodes.forEach(node => {
      const lower = node.label.toLowerCase();
      if (/\b(pro|pros|benefit|benefits|advantage|strengths|opportunities)\b/.test(lower)) {
        node.group = 'pros';
      } else if (/\b(con|cons|risk|risks|weaknesses|threats|problem|challenges)\b/.test(lower)) {
        node.group = 'cons';
      } else {
        node.group = node.role === 'positive' ? 'pros' : node.role === 'negative' ? 'cons' : 'neutral';
      }
    });
  } else if (detectedKind === 'problem_solution') {
    nodes.forEach(node => {
      const lower = node.label.toLowerCase();
      if (/\b(problem|challenge|issue|risk|weakness)\b/.test(lower)) {
        node.group = 'problem';
      } else if (/\b(solution|fix|resolution|remedy|strength)\b/.test(lower)) {
        node.group = 'solution';
      }
    });
  }

  // Handle single item fallback
  let notice: string | undefined = undefined;
  if (nodes.length === 1) {
    notice = 'Only a single concept was parsed.';
  }

  // Apply maximum limit (cap display list at 30 nodes for browser safety)
  let overflow: IWNode[] | undefined = undefined;
  if (nodes.length > 30) {
    overflow = nodes.slice(30);
    nodes.splice(30);
    notice = `Visual display capped at 30 nodes. ${overflow.length} items moved to overflow.`;
  }

  return {
    kind: detectedKind,
    title,
    subtitle,
    nodes,
    edges,
    meta: {
      detectedLanguage: 'en',
      confidence: 0.8,
      sourceCharCount,
      notice,
      overflow
    }
  };
}
