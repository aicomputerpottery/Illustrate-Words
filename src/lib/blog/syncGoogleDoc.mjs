import fs from 'fs';
import path from 'path';
import { parseDoc } from './parseDoc.mjs';

// Load .env manually if not already loaded (e.g., when run directly via node)
if (!process.env.BLOG_DOC_ID && fs.existsSync('.env')) {
  try {
    const envContent = fs.readFileSync('.env', 'utf8');
    for (const line of envContent.split('\n')) {
      const match = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (match) {
        process.env[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
      }
    }
  } catch (e) {
    console.warn('[sync-blog] Warning: could not load .env file:', e.message);
  }
}

// ─── CONFIGURE THIS ONCE ──────────────────────────────────────────────────────
// Share your Google Doc as "Anyone with the link can view", then paste the Doc ID here.
// Doc URL looks like: docs.google.com/document/d/DOC_ID_HERE/edit
// The export URL format below fetches the doc as plain text.
const DOC_ID = process.env.BLOG_DOC_ID || '1IfOuPBs-OlVBwxyq2KW4WKS2amiUa5nzZKjAeiix9eg';
// ─────────────────────────────────────────────────────────────────────────────

const EXPORT_URL = `https://docs.google.com/document/d/${DOC_ID}/export?format=txt`;
const OUT_DIR = path.resolve('src/data/blog');

export async function syncBlog() {
  console.log('[sync-blog] Fetching Google Doc from URL:', EXPORT_URL);
  
  let raw;
  try {
    const res = await fetch(EXPORT_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status} — check DOC_ID and sharing settings`);
    raw = await res.text();
    
    // If the fetched Google Doc is empty (or only has BOM), use mock posts fallback
    if (!raw || raw.trim().length <= 3) {
      console.log('[sync-blog] 💡 Google Doc is empty. Using default mock posts for local preview...');
      raw = `TITLE: How Mindmaps Unlock Your Best Ideas
SLUG: mindmaps-unlock-ideas
DATE: 2025-07-15
CATEGORY: Thinking
TAGS: mindmap, creativity, knowledge
EXCERPT: Most people draw boxes and arrows. Here's why the brain prefers webs.
HERO_VIZ: radial-burst | topic=Mindmap | nodes=6 | palette=lavender-dusk
STICK_FIGURE: thinking
VIZ_1: rising-bars | title=Idea types by origin | data=Observation:34,Analogy:28,Question:22,Accident:16 | palette=lavender-dusk
VIZ_2: flow-ladder | title=From chaos to clarity | steps=Dump,Cluster,Connect,Refine,Act | palette=lavender-dusk

We've all been there: staring at a blank page, trying to organize a chaotic jumble of thoughts. Most people immediately reach for bulleted lists or standard hierarchical outlines. But research shows our brains don't think in neat, linear lines. Instead, they process information through association and webs of connected concepts.

## Why the Brain Prefers Webs

Traditional outlining forces your brain to categorize items prematurely. When you use a mindmap, you allow thoughts to radiate outwards naturally from a central concept. This mirrors the brain's neural network, making memory retrieval and brainstorming much more efficient.

[STICK]

As you can see, thinking visually helps synthesize disparate concepts. When you build a web of ideas, you're not just storing data—you're mapping relationships.

## Designing the Map

A good mindmap doesn't just use text; it utilizes spatial arrangement, color, and visual hierarchy to group related nodes.

[VIZ:1]

The distribution above highlights how different triggers contribute to overall creative output. By mapping these, we can optimize our environment for higher quality ideas.

### The Five-Step Synthesizer

To turn a chaotic brainstorm into actionable insights, follow this simple structured progression:

[VIZ:2]

By transitioning systematically through these steps, we move from raw, unstructured data to coordinated action.

---

TITLE: The Power of Visual Storytelling in Business
SLUG: visual-storytelling-business
DATE: 2025-06-20
CATEGORY: Business
TAGS: storytelling, business, communication
EXCERPT: Numbers don't move people, narratives do. Here is how to combine data and design.
HERO_VIZ: connected-grid | title=Interconnected Systems | nodes=Strategy,Execution,Culture,Market,Product | palette=sunset-coral
STICK_FIGURE: presenting
VIZ_1: quadrant-map | title=Priority Matrix | q1=Do Now | q2=Plan | q3=Delegate | q4=Drop | items=Product:80:75,Marketing:40:90,Support:30:20 | palette=sunset-coral

In modern business, communication is the ultimate bottleneck. You can have the most advanced technology or the most optimized operations, but if your team doesn't align on the strategy, execution stalls.

## Narrative Over Numbers

Many leaders make the mistake of presenting raw spreadsheets to make a point. While data is critical, the human brain is wired for story. A narrative provides context, meaning, and emotional resonance.

[STICK]

When presenting a new initiative, you are not just presenting facts—you are guiding your audience through a journey of change.

## Finding the Strategic Overlaps

To communicate strategy effectively, you need to show how different pillars of your business support and feed into one another.

[VIZ:1]

By mapping our priorities onto a structured framework, we make the path forward immediately obvious to everyone involved.
`;
    }
  } catch (err) {
    console.error('[sync-blog] ❌ Fetch failed:', err.message);
    console.error('  → Make sure your Google Doc is shared as "Anyone with the link can view"');
    console.error('  → Make sure BLOG_DOC_ID is set in .env or hardcoded in syncGoogleDoc.mjs');
    process.exit(1);
  }

  // Parse all posts from the raw text
  const rawPosts = parseDoc(raw);
  
  // Deduplicate posts by slug, keeping the last occurrence (most recent revision)
  const postMap = new Map();
  for (const post of rawPosts) {
    postMap.set(post.slug, post);
  }
  const posts = Array.from(postMap.values());
  console.log(`[sync-blog] Parsed ${rawPosts.length} posts, resolved to ${posts.length} unique posts`);

  // Ensure output directory exists
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Write one JSON file per post
  let written = 0;
  for (const post of posts) {
    const filePath = path.join(OUT_DIR, `${post.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8');
    written++;
  }

  // Write master index (sorted newest-first)
  const index = posts
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ slug, title, date, category, tags, excerpt, readingTime, heroViz, heroImage }) => ({
      slug, title, date, category, tags, excerpt, readingTime, heroViz, heroImage
    }));
  fs.writeFileSync(path.join(OUT_DIR, '_index.json'), JSON.stringify(index, null, 2), 'utf8');

  console.log(`[sync-blog] ✅ Done — wrote ${written} posts + _index.json to src/data/blog/`);
}
