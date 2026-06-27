# Recommended Claude Skills for VisualCraft

> A curated list of skills from **skills.sh** (and related marketplaces) that will make VisualCraft production-ready, more interactive, and polished. Organized by category, with install commands and rationale for each.

---

## What skills are and how they work

**Claude skills** are reusable instruction packages — small `.md` files that teach Claude (and Claude Code) procedural knowledge for specific tasks. They contain hard-won best practices, patterns, and gotchas that aren't in Claude's base training.

**Where to get them:**
- **skills.sh** — The largest public directory with thousands of free skills
- **github.com/anthropics/skills** — Official Anthropic skills (highest quality, well-maintained)
- **claudeskills.info** — Curated alternative directory with 140+ skills
- **skillhub.club** — 7,000+ AI-evaluated skills

**How to install** (two common methods):

```bash
# Method 1: npx skills add (for skills.sh)
npx skills add github.com/<owner>/<repo>

# Method 2: Claude Code plugin marketplace
/plugin marketplace add <owner>/<repo>

# Method 3: Manual — download SKILL.md, place in .claude/skills/ folder
```

---

## ⚠️ Safety first — vet before installing

Before installing any skill from a community marketplace:

1. **Check install count** — Anything under 1,000 installs is risky. Stick to skills with high install counts.
2. **Check the author** — Stick to known companies (Vercel, Anthropic, well-known developers with public profiles).
3. **Read the SKILL.md** — If anything looks suspicious (network calls, secret exfiltration, weird hooks), skip it.
4. **Test in a throwaway project** — Never install untested skills in your main VisualCraft project. Spin up a sandbox folder, install, test, then move to production.

---

# The recommended skill list

## 1. CORE STACK — install these first

### 🌟 frontend-design (Official Anthropic)

**The single most valuable skill for VisualCraft.** This is one of the official Anthropic skills, designed to create distinctive, production-grade frontend interfaces that reject generic AI aesthetics through intentional design choices. Guides aesthetic direction selection (brutalist, maximalist, retro-futuristic, luxury, organic, etc.) before implementation to ensure cohesive, memorable designs.

Why it matters for you: This is exactly the philosophy behind the Wispr Flow aesthetic you want. It encourages bold, intentional design over template defaults.

```bash
# Install from the official Anthropic skills repo
/plugin marketplace add anthropics/skills
```

Or from skills.sh: `https://www.skills.sh/anthropics/skills/frontend-design`

---

### 🚀 astro (or astro-best-practices)

Astro-specific knowledge that helps Claude avoid common pitfalls in your stack. Covers .astro component development, file-based routing in src/pages, dynamic routes with getStaticPaths, partial hydration via client:* directives (client:load, client:idle, client:visible), built-in asset optimization, lazy loading, and Tailwind integration.

There are two variants worth considering:
- **`mindrally/skills/astro`** — General Astro patterns and best practices
- **`jspark04/contextmanagement/astro-best-practices`** — Focused on never mix define:vars with import statements inside the same `<script>` tag—doing so breaks Vite/Astro bundling; instead, pass dynamic data via data-* attributes on DOM elements

Install command (example):
```bash
npx skills add github.com/mindrally/skills --skill astro
```

---

### 🎨 tailwind-design-system

By wshobson — build production-ready design systems with Tailwind CSS v4, including CSS-first configuration, design tokens, component variants, responsive patterns, and accessibility.

**Note:** This targets Tailwind v4. If you stay on v3 (which our build is currently), check for a v3-specific variant. The skill includes a v3→v4 migration guide which you could use later.

```bash
npx skills add github.com/wshobson/agents --skill tailwind-design-system
```

Why it helps: Tailwind v4 uses OKLCH colors for better visual consistency and CSS-first config that's more maintainable. Worth migrating to eventually.

---

## 2. UI/UX ENHANCEMENT — make the site more interactive

### ✨ GSAP scroll animations

Several skills exist for premium scroll-triggered animations using GSAP. Search skills.sh for: **"GSAP ScrollTrigger"**. The relevant one creates premium staggered word-reveal animations through overflow masks using GSAP ScrollTrigger for editorial-style scroll effects.

Why it helps: Your Wispr Flow design has editorial-magazine vibes. Staggered word reveals on scroll add the "premium" polish.

Note: GSAP is a separate library (npm install gsap). The skill just teaches Claude how to use it well.

---

### 🌗 theme-toggle (dark mode)

If you want to add a dark mode toggle later, search for: **"theme toggle dark mode Tailwind"**. The Tailwind v4 design system skill covers this with automatic theme detection, meta theme-color update, and a ThemeToggle button component.

For your project, dark mode isn't required — the cream/forest alternating design already provides dual-tone feel.

---

### 🎬 motion-and-animation patterns

Search skills.sh for: **"motion design animation"** or **"micro-interactions"**. Look for skills covering:
- Page transitions
- Element entrance animations (fade-in, slide-up)
- Hover state choreography
- Loading states / skeleton screens
- View Transitions API (modern browser native)

---

### 📐 design-system-extractor

Find skills that extract design primitives and tokens from public websites to generate starter design system files. Useful if you want to extract more visual tokens from sites you admire (like Wispr Flow's color choices or spacing).

Search skills.sh for: **"design system extractor"** or **"extract design tokens"**.

---

### 🎯 shadow-utilities (Tailwind layered shadows)

A skill that helps apply exact Tailwind arbitrary shadow utilities for polished, layered neutral elevation across cards, controls, and modals.

Why it helps: Your hard shadow aesthetic (`shadow-hard`) is great, but for some surfaces (modals, dropdowns) softer layered shadows look more refined.

---

## 3. ACCESSIBILITY — required for production

### ♿ accessibility-audit (a11y)

Search skills.sh for: **"accessibility audit"** or **"a11y review"**. Look for skills that cover:
- WCAG 2.1 AA compliance checks
- Keyboard navigation patterns
- Screen reader testing patterns
- ARIA attributes
- Color contrast verification
- Focus management

**Why it's critical:** A free public tool needs to work for everyone. Your design system file already has an Accessibility section — these skills help Claude actually enforce those rules when writing code.

---

### 🎯 focus-management

For the wizard especially, keyboard users need clear focus indicators when navigating between steps. Search skills.sh for: **"focus management"** or **"focus trap"**.

---

## 4. PERFORMANCE & CORE WEB VITALS

### ⚡ performance-optimization

Search for skills covering:
- Lazy loading images
- Code splitting in Astro
- Critical CSS inlining
- Font loading optimization (you load Fraunces + Inter)
- Reducing JavaScript bundle size

Astro handles most of this automatically, but a perf-audit skill helps catch the last 10%.

---

### 🖼️ image-optimization

Astro has built-in image optimization (`<Image />` component), but if you add user-generated content or screenshots later, search skills.sh for: **"image optimization webp"** or **"next-gen images"**.

---

## 5. SEO & METADATA

### 🔍 seo-meta-tags

Your Layout.astro already has Open Graph and Twitter card meta tags, but a dedicated SEO skill ensures:
- Each page has proper `<title>` and `<meta description>`
- Schema.org structured data (helps Google understand the site)
- Sitemap.xml generation
- Robots.txt configuration

Search skills.sh for: **"SEO meta tags Open Graph"** or **"structured data schema"**.

---

### 📊 sitemap-generation

Astro has `@astrojs/sitemap` integration. A skill can help Claude wire this up properly:

```bash
npx astro add sitemap
```

---

## 6. TESTING — catch bugs before users do

### 🧪 playwright-e2e

End-to-end testing for the wizard flow. Search skills.sh for: **"Playwright E2E"** or **"end-to-end testing"**.

Why it matters: Your wizard has 4 steps, localStorage, URL params, search filtering, and copy-to-clipboard. Tests catch regressions when you make changes later.

Sample test scenarios:
- Complete the 4-step flow with default selections
- Refresh mid-flow and verify state persists
- Test `?category=mindmap` URL parameter
- Test copy button puts text on clipboard

---

### 👁️ visual-regression-testing

Search skills.sh for: **"visual regression"** or **"screenshot testing"**. Useful when you want to verify the design doesn't break on changes.

Tools: Percy, Chromatic, or open-source alternatives.

---

### ♿ accessibility-testing

Search for: **"axe accessibility testing"** or **"pa11y"**. Automated accessibility tests catch contrast issues, missing labels, etc.

---

## 7. CODE QUALITY

### 📝 code-review

By multiple authors. Search skills.sh for: **"code review"**. Look for skills that systematically review code for:
- Naming conventions
- Component architecture
- Performance anti-patterns
- Security issues
- Maintainability

mhattingpete/claude-skills-marketplace has a good one: "Process and implement code review feedback systematically with todo tracking."

---

### 🧹 linting-formatting

ESLint + Prettier for JavaScript/Astro. Search skills.sh for: **"ESLint Prettier setup"**.

Basic install for your project:
```bash
npm install -D prettier prettier-plugin-astro eslint
```

---

### 🔒 security-audit

Search for: **"security audit dependencies"**. Helps Claude check for:
- Outdated npm packages with vulnerabilities (`npm audit`)
- Exposed secrets in code
- Insecure HTTP requests
- XSS prevention

---

## 8. DEPLOYMENT — Cloudflare Pages

### ☁️ cloudflare-pages-deployment

Search skills.sh for: **"Cloudflare Pages"** or **"Cloudflare Workers"**. The skill mhattingpete has includes investigating and resolving Cloudflare configuration issues using API-driven evidence gathering.

Covers:
- `_headers` file syntax (you already have this)
- `_redirects` syntax
- Build configuration
- Environment variables (none needed for your static site)
- Custom domain setup
- Cache rules

---

### 🌐 cdn-caching-strategy

Search skills.sh for: **"CDN caching"** or **"cache headers"**. Helps Claude set proper cache headers in your `_headers` file for static assets (fonts, images, CSS, JS).

---

## 9. DOCUMENTATION

### 📚 storybook-component-docs

If you want to document your component library (Navbar, Footer, Squiggle, cards, buttons) for future developers, search skills.sh for: **"Storybook setup"**.

Probably overkill for VisualCraft alone, but useful if you spin off the design system later.

---

### 🎨 mermaid-tools

By daymade — "/daymade-docs:mermaid-tools". Generates diagrams from text. Useful for documenting your state machine, user flows, etc.

```bash
claude plugin install daymade-docs@daymade-skills
```

---

## 10. CONTENT & MARKETING

### ✍️ marketing-copywriting

Search skills.sh for: **"marketing copywriting"** or **"high-converting copy"**. Guidelines and workflows for writing high-converting marketing copy for web pages, including headlines, CTAs, and page structures.

Helps refine your home page copy beyond placeholder text.

---

### 🎯 conversion-rate-optimization

Skills focused on landing-page conversion patterns. Search: **"landing page conversion"** or **"CRO patterns"**.

---

## 11. INTERACTIVITY UPGRADES (for VisualCraft specifically)

These would make the tool more interactive and impressive:

### 🎨 svg-visualization

Search skills.sh for: **"SVG diagrams"** or **"SVG generation"**. Could help you add live SVG previews in the wizard — so users see what their visualization might look like before copying the prompt.

---

### 🎲 interactive-canvas

Search for: **"HTML canvas interactive"** or **"canvas animation"**. If you want to add a playful animation in the hero (like floating shapes that respond to mouse movement).

---

### 🗣️ voice-input (Wispr-Flow-style)

If you want to add voice input for the "Your content" field in Step 4, search skills.sh for: **"Web Speech API"** or **"voice transcription browser"**. Native browser API, no costs.

---

### 📲 web-share-api

For a "Share this prompt" button. Search skills.sh for: **"Web Share API"**. Lets users share their generated prompt natively on mobile via the OS share sheet.

---

### 🔗 url-state-encoding

For shareable links that encode all wizard selections. Search skills.sh for: **"URL state management"** or **"share link generator"**.

Example: `/generate?type=swot-analysis&palette=ocean-blue&connector=curved&icon=outline&mood=corporate` opens the wizard with all selections pre-filled.

---

## 12. ANALYTICS (privacy-friendly, free)

### 📈 plausible-analytics

Search skills.sh for: **"Plausible Analytics"** or **"privacy analytics"**. Setting up Plausible (free tier or self-hosted) gives you traffic insights without invasive tracking.

Add a single script tag to Layout.astro:
```html
<script defer data-domain="visualcraft.pages.dev" src="https://plausible.io/js/script.js"></script>
```

---

### 🌐 umami-analytics

Alternative: Umami (open source, self-hostable, free). Search: **"Umami analytics"**.

---

## Recommended install order

For your project, install these in priority order:

1. **`frontend-design`** (Anthropic official) — Your design philosophy backbone
2. **`astro`** (or astro-best-practices) — Stack-specific knowledge
3. **`tailwind-design-system`** (wshobson) — Tailwind v4 patterns
4. **`accessibility-audit`** — Critical for production
5. **`playwright-e2e`** — Catch wizard regressions
6. **`seo-meta-tags`** — Get found in search
7. **`cloudflare-pages-deployment`** — Smooth deploy
8. **`marketing-copywriting`** — Better home page text
9. **`gsap-scroll-animations`** — Visual polish
10. **`url-state-encoding`** — Shareable wizard URLs

That's enough to get you to a polished production launch. Don't install everything at once — too many overlapping skills can confuse Claude Code.

---

## How to verify a skill is installed

After installing, check it's available:

```bash
# In Claude Code, type:
/skills
```

You should see a list of available skills with their descriptions. If your installed skill isn't there, the install path may need to be re-checked.

---

## A note on overlap and conflicts

Different skills sometimes give contradictory advice (e.g., one says "use Tailwind v3", another says "use v4"). When this happens:

- Stick with your current setup (v3 in your case unless you migrate)
- Tell Claude Code explicitly: "Use Tailwind v3 conventions, ignore v4-specific advice"
- Uninstall skills that conflict if they cause confusion

---

## Search queries that work well on skills.sh

When browsing skills.sh, these search terms find the highest-quality matching skills:

| Goal | Search term |
|------|-------------|
| Astro patterns | `astro best practices` |
| Tailwind components | `tailwind design system` or `tailwind components` |
| Animations | `GSAP scroll trigger` or `framer motion` |
| Accessibility | `accessibility audit` or `WCAG a11y` |
| Testing | `Playwright e2e` or `vitest setup` |
| SEO | `SEO meta tags` or `structured data` |
| Performance | `Core Web Vitals` or `performance audit` |
| Cloudflare | `Cloudflare Pages` or `Workers deployment` |
| Design extraction | `design tokens extractor` |
| Copy/content | `marketing copywriting` or `landing page copy` |

---

## Final notes

**Skills aren't magic.** They're well-organized notes that nudge Claude toward better decisions. Quality varies — a 5-star skill with 50k installs from a known author is reliable. A 2-star skill with 50 installs from an unknown author may waste your time.

**You don't need 50 skills.** 5-10 well-chosen skills give you 80% of the benefit. More skills = more context for Claude to juggle.

**Skills update.** Check periodically for updates — `/skills update` in Claude Code (where supported).

**Build your own.** If you need a skill that doesn't exist (e.g., "VisualCraft visualization prompt patterns"), the `skill-creator` skill helps you write your own.

---

## One last recommendation

After your project ships, consider publishing a **VisualCraft skill** of your own to skills.sh. Something like:

> "VisualCraft prompt patterns: best practices for generating AI-ready visualization prompts across 76 chart types, 25 color palettes, and 17 style combinations."

It's good marketing, helps the community, and once it has install momentum, it drives traffic back to your site. The skills.sh ecosystem is self-reinforcing — contributors get visibility.
