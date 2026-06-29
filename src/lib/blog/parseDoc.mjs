/**
 * Parses raw Google Docs plain-text export into structured post objects.
 * 
 * Input:  raw string from /export?format=txt
 * Output: array of post objects
 */
export function parseDoc(raw) {
  // Normalize line endings, strip BOM
  const text = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/^\uFEFF/, '');

  // Split into post blocks on "---" separator lines
  // Match "---" when it appears on its own line (with optional whitespace)
  const blocks = text.split(/\n\s*---\s*\n/).map(b => b.trim()).filter(Boolean);

  return blocks
    .map(block => parseBlock(block))
    .filter(post => post !== null);
}

function parseBlock(block) {
  const lines = block.split('\n');
  const meta = {};
  let bodyStart = 0;

  // Parse header fields until we hit a blank line or a non-field line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const fieldMatch = line.match(/^([A-Z_0-9]+):\s*(.+)$/);
    if (fieldMatch) {
      meta[fieldMatch[1]] = fieldMatch[2].trim();
      bodyStart = i + 1;
    } else if (line === '') {
      bodyStart = i + 1;
      break;
    } else {
      // Non-field, non-blank line before any blank — still in meta zone
      // (Google Docs sometimes adds blank lines mid-meta; keep scanning)
      if (Object.keys(meta).length > 0) { bodyStart = i; break; }
    }
  }

  // Validate required fields
  const required = ['TITLE', 'SLUG', 'DATE', 'CATEGORY', 'EXCERPT', 'HERO_VIZ'];
  for (const field of required) {
    if (!meta[field]) {
      console.warn(`[parseDoc] Skipping block — missing field: ${field}`);
      return null;
    }
  }

  // Parse body
  const bodyLines = lines.slice(bodyStart);
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
    heroViz: parseVizField(meta.HERO_VIZ),
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

  let inParagraph = false;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    // H2 heading
    if (/^## .+/.test(line)) {
      if (inParagraph) { htmlLines.push('</p>'); inParagraph = false; }
      const text = line.replace(/^## /, '');
      const id = slugify(text);
      headings.push({ level: 2, text, id });
      htmlLines.push(`<h2 id="${id}">${text}</h2>`);
      continue;
    }

    // H3 heading
    if (/^### .+/.test(line)) {
      if (inParagraph) { htmlLines.push('</p>'); inParagraph = false; }
      const text = line.replace(/^### /, '');
      const id = slugify(text);
      headings.push({ level: 3, text, id });
      htmlLines.push(`<h3 id="${id}">${text}</h3>`);
      continue;
    }

    // Inline viz tag: [VIZ:N]
    const vizMatch = line.match(/^\[VIZ:(\d+)\]$/);
    if (vizMatch) {
      if (inParagraph) { htmlLines.push('</p>'); inParagraph = false; }
      const n = parseInt(vizMatch[1]);
      inlineVizSlots.add(n);
      htmlLines.push(`<div data-inline-viz="${n}"></div>`);
      continue;
    }

    // Stick figure tag: [STICK]
    if (line === '[STICK]') {
      if (inParagraph) { htmlLines.push('</p>'); inParagraph = false; }
      hasStick = true;
      htmlLines.push(`<div data-stick-figure></div>`);
      continue;
    }

    // Blank line ends paragraph
    if (line === '') {
      if (inParagraph) { htmlLines.push('</p>'); inParagraph = false; }
      continue;
    }

    // Regular text — inline formatting
    const formatted = applyInlineFormatting(line);
    if (!inParagraph) {
      htmlLines.push('<p>');
      inParagraph = true;
    }
    htmlLines.push(formatted);
  }

  if (inParagraph) htmlLines.push('</p>');

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
