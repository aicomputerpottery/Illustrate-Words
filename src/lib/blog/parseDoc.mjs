/**
 * Parses raw Google Docs plain-text export into structured post objects.
 * 
 * Input:  raw string from /export?format=txt
 * Output: array of post objects
 */
export function parseDoc(raw) {
  // Normalize line endings, strip BOM
  const text = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/^\uFEFF/, '');

  // Split into blocks on "---" or horizontal rules (10 or more underscores/dashes on a line)
  const blocks = text.split(/\n\s*(?:---|_{10,})\s*\n/).map(b => b.trim()).filter(Boolean);

  const posts = [];
  for (const block of blocks) {
    const parsed = parseBlock(block);
    if (!parsed) continue;

    // Find the first non-empty, non-divider line of the block
    const firstLine = block.split('\n')
      .map(l => l.trim())
      .find(l => l.length > 0 && !/^[_\-\s\uFEFF\u200B]+$/.test(l));

    if (firstLine === 'Frequently Asked Questions' && posts.length > 0) {
      const prevPost = posts[posts.length - 1];
      // Append FAQ block content to the previous post
      prevPost.html += `\n<h2 id="frequently-asked-questions">Frequently Asked Questions</h2>\n` + parsed.html;
      
      // Merge headings (making sure "Frequently Asked Questions" itself is registered as H2)
      prevPost.headings.push({
        level: 2,
        text: "Frequently Asked Questions",
        id: "frequently-asked-questions"
      });
      prevPost.headings.push(...parsed.headings);

      // Merge inline slots and flags
      if (parsed.inlineVizSlots) {
        prevPost.inlineVizSlots = [...new Set([...(prevPost.inlineVizSlots || []), ...parsed.inlineVizSlots])];
      }
      if (parsed.hasStick) {
        prevPost.hasStick = true;
      }
    } else {
      posts.push(parsed);
    }
  }

  return posts;
}

function parseBlock(block) {
  const lines = block.split('\n').map(l => l.trim());
  
  // Skip leading empty lines and separator lines (e.g. lines of only underscores or dashes)
  let startIdx = 0;
  while (startIdx < lines.length && (lines[startIdx] === '' || /^[_\-\s\uFEFF\u200B]+$/.test(lines[startIdx]))) {
    startIdx++;
  }
  const activeLines = lines.slice(startIdx);

  const meta = {};
  let bodyLines = [];

  // Parse header fields until we hit a non-field line
  for (let i = 0; i < activeLines.length; i++) {
    const line = activeLines[i];
    if (line === '') continue;

    // Match metadata key-value (e.g. TITLE: My Title or META DESCRIPTION: ...)
    const fieldMatch = line.match(/^([A-Za-z0-9_/\s]+):\s*(.+)$/);
    if (fieldMatch) {
      const rawKey = fieldMatch[1].trim();
      const isAllUppercase = /^[A-Z0-9_/\s]+$/.test(rawKey);
      const isKnownKey = /^(title|slug|date|category|tags|excerpt|meta\s+description)$/i.test(rawKey);
      
      if (isAllUppercase || isKnownKey) {
        const key = rawKey.toUpperCase().replace(/\s+/g, '_');
        meta[key] = fieldMatch[2].trim();
      } else {
        bodyLines = activeLines.slice(i);
        break;
      }
    } else {
      bodyLines = activeLines.slice(i);
      break;
    }
  }

  // If no fields parsed, treat whole block as body
  if (bodyLines.length === 0 && Object.keys(meta).length === 0) {
    bodyLines = activeLines;
  }

  // Auto-extract or default missing fields
  if (!meta.TITLE) {
    const firstLineIdx = bodyLines.findIndex(l => l.length > 0 && !l.startsWith('__'));
    if (firstLineIdx !== -1) {
      meta.TITLE = cleanMarkdown(bodyLines[firstLineIdx].replace(/^#\s*/, ''));
      bodyLines = bodyLines.slice(firstLineIdx + 1);
    } else {
      meta.TITLE = "Untitled Post";
    }
  } else {
    meta.TITLE = cleanMarkdown(meta.TITLE);
  }

  if (!meta.SLUG) {
    meta.SLUG = slugify(meta.TITLE);
  } else {
    meta.SLUG = slugify(cleanMarkdown(meta.SLUG));
  }

  if (meta.DATE) {
    let cleanDateStr = cleanMarkdown(meta.DATE);
    let parsedDate = new Date(cleanDateStr);
    if (isNaN(parsedDate.getTime())) {
      parsedDate = new Date();
    }
    meta.DATE = parsedDate.toISOString().split('T')[0];
  } else {
    meta.DATE = new Date().toISOString().split('T')[0];
  }

  if (!meta.CATEGORY) {
    meta.CATEGORY = "Design";
  } else {
    meta.CATEGORY = cleanMarkdown(meta.CATEGORY);
  }

  if (!meta.EXCERPT) {
    if (meta.META_DESCRIPTION) {
      meta.EXCERPT = cleanMarkdown(meta.META_DESCRIPTION);
    } else {
      const firstPara = bodyLines.find(l => l.length > 0 && !l.startsWith('#')) || "";
      meta.EXCERPT = cleanMarkdown(firstPara).substring(0, 150) + (firstPara.length > 150 ? "..." : "");
    }
  } else {
    meta.EXCERPT = cleanMarkdown(meta.EXCERPT);
  }

  const heroImage = meta.HERO_IMAGE ? cleanMarkdown(meta.HERO_IMAGE) : `/images/blog/${meta.SLUG}.png`;

  // Parse body
  const { html, headings, inlineVizSlots, hasStick } = parseBody(bodyLines);

  // Parse VIZ_N fields
  const inlineVizDefs = {};
  for (let n = 1; n <= 4; n++) {
    if (meta[`VIZ_${n}`]) inlineVizDefs[n] = parseVizField(meta[`VIZ_${n}`]);
  }

  // Reading time (avg 200 wpm)
  const wordCount = bodyLines.join(' ').replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  return {
    title: meta.TITLE,
    slug: meta.SLUG,
    date: meta.DATE,
    category: meta.CATEGORY,
    tags: meta.TAGS ? meta.TAGS.split(',').map(t => t.trim()) : [],
    excerpt: meta.EXCERPT,
    readingTime,
    heroViz: meta.HERO_VIZ ? parseVizField(meta.HERO_VIZ) : null,
    heroImage,
    stickFigure: meta.STICK_FIGURE || null,
    inlineVizDefs,
    html,
    headings,
  };
}

function parseBody(lines) {
  const headings = [];
  const inlineVizSlots = new Set();
  let hasStick = false;
  const htmlLines = [];

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    // Skip empty lines
    if (line === '') continue;

    // Detect dividers
    if (/^[_\-\s\u200B]+$/.test(line)) continue;

    // Heading detection
    let isHeading = false;
    let headingLevel = 2;
    let headingText = '';

    if (/^##\s+(.+)$/.test(line)) {
      isHeading = true;
      headingLevel = 2;
      headingText = line.replace(/^##\s+/, '');
    } else if (/^###\s+(.+)$/.test(line)) {
      isHeading = true;
      headingLevel = 3;
      headingText = line.replace(/^###\s+/, '');
    } else {
      // Auto-detect headings: short lines without terminal punctuation (or short questions)
      const cleanLine = line.replace(/^#+\s*/, '');
      const isShort = cleanLine.length > 0 && cleanLine.length < 90;
      const isQuestion = cleanLine.endsWith('?');
      const isExcluded = cleanLine.startsWith('[') || cleanLine.startsWith('---') || cleanLine.startsWith('●') || cleanLine.startsWith('•');
      
      if (isShort && !isExcluded && (isQuestion || !/[.,:;!]$/.test(cleanLine) || /^(Why|What|Where|How|Who|Which|When|1–\d+|[0-9]+–[0-9]+:)/i.test(cleanLine))) {
        // Exclude numbered list items (e.g. 1. The Hockey Stick)
        if (!/^\d+\.\s+/.test(cleanLine)) {
          isHeading = true;
          headingLevel = cleanLine.includes(':') || isQuestion ? 3 : 2;
          headingText = cleanLine;
        }
      }
    }

    if (isHeading) {
      const id = slugify(headingText);
      headings.push({ level: headingLevel, text: headingText, id });
      if (headingLevel === 3) {
        htmlLines.push(`<h3 id="${id}">${headingText}</h3>`);
      } else {
        htmlLines.push(`<h2 id="${id}">${headingText}</h2>`);
      }
      continue;
    }

    // Inline viz tag: [VIZ:N]
    const vizMatch = line.match(/^\[VIZ:(\d+)\]$/);
    if (vizMatch) {
      const n = parseInt(vizMatch[1]);
      inlineVizSlots.add(n);
      htmlLines.push(`<div data-inline-viz="${n}"></div>`);
      continue;
    }

    // Stick figure tag: [STICK]
    if (line === '[STICK]') {
      hasStick = true;
      htmlLines.push(`<div data-stick-figure></div>`);
      continue;
    }

    // Regular paragraph
    const formatted = applyInlineFormatting(line);
    htmlLines.push(`<p>${formatted}</p>`);
  }

  return {
    html: htmlLines.join('\n'),
    headings,
    inlineVizSlots: [...inlineVizSlots],
    hasStick,
  };
}

function applyInlineFormatting(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

function parseVizField(raw) {
  // Format: "template-id | key=value | key=value"
  const parts = raw.split('|').map(p => p.trim());
  const templateId = parts[0];
  const params = {};
  for (const part of parts.slice(1)) {
    const [k, v] = part.split('=').map(p => p.trim());
    if (k && v !== undefined) params[k] = v;
  }
  return { templateId, params };
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function cleanMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/[\*\#\_\`\~]/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .trim();
}
