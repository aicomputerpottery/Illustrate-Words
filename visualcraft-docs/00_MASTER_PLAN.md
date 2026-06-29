# VisualCraft — Master Build Plan

> A free, offline-first prompt generator that replicates Napkin AI's visualization-picking experience. Users select a visualization type, color palette, and style options, then receive a polished AI prompt they can paste into Gemini, ChatGPT, Claude, or Midjourney to generate the actual visual.

---

## What you are building

**Product name:** VisualCraft
**Tagline:** "Turn any idea into a stunning visualization — for free."
**Tech stack:** Astro.js + Tailwind CSS + Vanilla JavaScript
**Hosting:** Cloudflare Pages (static deployment)
**Cost:** $0 to build, $0 to host, no API keys, no backend
**Tooling:** VS Code + Claude Code (with `/model opusplan` enabled)

---

## The complete page list

- Home `/`
- Generator `/generate`
- Gallery `/gallery`
- About `/about`

---

## Build phases

1. Phase 1 — Environment Setup & Project Scaffolding
2. Phase 2 — The Data Layer
3. Phase 3 — Shared Components (Layout, Navbar, Footer)
4. Phase 4 — Home Page (Landing)
5. Phase 5 — Generator Page (The Wizard — Main Product)
6. Phase 6 — Gallery Page
7. Phase 7 — About Page
8. Phase 8 — Polish, Accessibility & Performance
9. Phase 9 — Deployment to Cloudflare Pages
10. Phase 10 — Post-Launch Improvements (Optional)

---

## Next step

Open [01_PHASE_1_SETUP.md](01_PHASE_1_SETUP.md) and follow it line by line.

---

# VisualCraft — Master Summary Addendum #4
## Covers: Phase 9 — Blog System (Google Docs pipeline, IIB hero vizes, inline vizes, stick figures)

## Updated Phase Plan

✅ Phases 1 – 8
✅ Phase 9 — Blog System (spec ready in 09_PHASE_9_BLOG_SYSTEM.md)
⏳ APPLY Phase 9 in repo
⏳ Phase 10 — Deploy to Cloudflare Pages (prev Phase 9)

## What was added

- /blog listing page with category filter chips
- /blog/[slug] individual post page
- Google Docs sync script (npm run sync-blog): fetches public Doc, parses posts, writes JSON
- BlogHeroViz component: 13 SVG viz templates (IIB style, forest bg, one accent color)
- InlineViz component: same template system, mid-article placement
- StickFigure component: 8 CSS-animated stick figure scenes (thinking/building/presenting/comparing/flowing/spiking/celebrating/puzzling)
- ReadingProgress bar, TableOfContents (sticky sidebar), ShareBar (copy-link only), AuthorBlock, RelatedPosts, BlogCard
- BLOG_DOC_ID env var → .env file
- Build script updated: npm run build = npm run sync-blog && astro build

## New files

src/
  data/blog/                        (generated — one .json per post + _index.json)
  pages/blog/index.astro
  pages/blog/[slug].astro
  components/blog/
    BlogCard.astro, BlogHeroViz.astro, InlineViz.astro, StickFigure.astro,
    PostBody.astro, ReadingProgress.astro, TableOfContents.astro,
    ShareBar.astro, AuthorBlock.astro, RelatedPosts.astro
  lib/blog/
    syncGoogleDoc.mjs, parseDoc.mjs, heroVizTemplates.mjs, stickFigures.mjs
scripts/sync-blog.mjs

## Key decisions

| Decision | Chosen | Rejected |
|---|---|---|
| Content source | Google Docs (public export, no OAuth) | CMS, Markdown files, Notion |
| Blog images | SVG templates generated at build time | AI image generation, stock photos |
| Viz style | IIB-inspired: forest bg, one accent, Fraunces labels | Generic chart libraries |
| Inline vizes | Same template system, mid-article | Separate image uploads |
| Stick figures | CSS-animated SVG, plays on scroll-enter | Lottie, GIF, third-party |
| Share buttons | Copy-link only | Social media brand icons |
| Build | sync-blog script runs before astro build | Manual pre-generation |

## Immediate next steps

1. Set BLOG_DOC_ID=1doBykoO30rl2Gsbh33YXu9JS784YC-6Lxzrv73OACgM in .env
2. Make your Google Doc public (Share → Anyone with the link → Viewer)
3. Feed 09_PHASE_9_BLOG_SYSTEM.md to Claude Code / Antigravity
4. Run npm run sync-blog to confirm the fetch works
5. Add your first blog post to the Google Doc following the format in §2
6. Run npm run dev and visit /blog to preview
7. Then Phase 10: Cloudflare Pages deploy

