# VisualCraft — DESIGN.md

> **The single source of truth for how VisualCraft looks.** Wispr Flow–inspired editorial aesthetic.
> This file supersedes `DESIGN_SYSTEM.md`. Feed it to Claude Code alongside any page you're fixing.
>
> ## How to use this file
> - **You normally edit ONLY Section 1 (Editable Tokens).** Change a hex, a font name, a size — everything downstream reads from it.
> - Sections 2–12 are *rules and recipes*. Don't rewrite them; point Claude Code at them.
> - Anywhere you see **`✏️ EDIT`**, that value is safe to change. Anywhere you see **`🔒 LAW`**, do not violate it.
> - When something "looks bad," find the matching pattern in Section 9 (sections) or Section 11 (per-page) and apply it verbatim.

---

# 1. EDITABLE TOKENS — ✏️ the only block you usually touch

Everything in the site is built from these. Edit here, rebuild, done.

## 1.1 Colors `✏️ EDIT`

```js
// Paste into tailwind.config.mjs → theme.extend.colors
colors: {
  // Surfaces — warm paper tones (Wispr's off-white base)
  cream:  { DEFAULT: '#F4EFE2', darker: '#EBE5D5', lighter: '#FAF6EC' },
  // Dark blocks — deep editorial green (Wispr's dark sections)
  forest: { DEFAULT: '#1F2D24', light: '#2A3D32', darker: '#152019' },
  // Accents — used as FULL BLOCKS, not tints (see 🔒 LAW in §4)
  accent: {
    lavender:'#B5A5F0', 'lavender-dark':'#9683E8', 'lavender-light':'#D4CAFA',
    lime:    '#D4E84A', 'lime-dark':'#B8CC2C',
    pink:    '#F4A8C9', 'pink-dark':'#E988B5',
    orange:  '#F26835', 'orange-dark':'#D4501F',
    sky:     '#A8D4F0', 'sky-dark':'#7FB5E0',
  },
  // Text
  ink: {
    primary:'#0A0A0A', secondary:'#5C5546', tertiary:'#8A8270',
    'on-dark-primary':'#F4EFE2', 'on-dark-secondary':'#A8B5AC',
  },
}
```

> **To re-skin the whole site:** swap the five `accent.*` families and/or `forest`/`cream`. Keep `ink` legible against `cream`. Keep one dark family and one paper family.

## 1.2 Typography `✏️ EDIT`

```js
fontFamily: {
  serif: ['Fraunces', 'Georgia', 'serif'],     // headlines — swap "Fraunces" to change display face
  sans:  ['Inter', 'system-ui', 'sans-serif'], // body/UI  — swap "Inter" to change body face
},
fontSize: {
  display: ['clamp(3.5rem, 8vw, 6rem)',   { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
  h1:      ['clamp(2.5rem, 5vw, 4rem)',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
  h2:      ['clamp(2rem, 4vw, 3rem)',     { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
  h3:      ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
},
```

Google Fonts link (in `Layout.astro <head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

## 1.3 Shape & depth `✏️ EDIT`

```js
borderRadius: { btn: '999px', card: '20px', 'card-sm': '12px' },
borderWidth:  { '1.5': '1.5px' },
boxShadow: {
  card:      '0 2px 0 0 rgba(10,10,10,0.08)',
  btn:       '0 2px 0 0 rgba(10,10,10,0.15)',
  'btn-hover':'0 4px 0 0 rgba(10,10,10,0.15)',
  hard:      '4px 4px 0 0 rgba(10,10,10,1)',   // the signature hard offset shadow
},
maxWidth: { container: '1200px' },
```

## 1.4 Motion `✏️ EDIT`

```
hover transforms/colors : 200ms ease-in-out
entrances/disclosure    : 300ms ease-out
card hover              : straighten rotation + reveal shadow-hard + -translate-y-0.5
🔒 LAW: everything respects prefers-reduced-motion (see §3.4)
```

---

# 2. How tokens map to code

- **Tailwind** reads §1.1–1.3 from `tailwind.config.mjs`. Class names follow the token: `bg-accent-lavender`, `text-ink-secondary`, `border-1.5`, `shadow-hard`, `rounded-card`, `max-w-container`, `text-display`.
- **global.css** defines the component utilities in §7 using `@apply` on those tokens. If you change a token, the utilities update automatically — don't hard-code hex in components.
- **🔒 LAW:** No raw hex values in `.astro` files. Always reference a token class. The only exceptions are the **logo** (§6) and **icon accents** (§10), which carry hardcoded hex *on purpose* so they can never inherit a wrong color.

---

# 3. Foundations

## 3.1 Color philosophy (Wispr Flow rule) 🔒 LAW
Accents are used as **full saturated blocks**, never as faint tints behind text. A lavender section is *entirely* lavender. The home/about pages each get **one** saturated accent block as the emotional peak; the rest alternate `cream` ↔ `cream-darker` ↔ `forest`.

## 3.2 Background cadence 🔒 LAW
No two adjacent sections share a background. Allowed sequence per page (pick a rhythm, never repeat neighbors):
```
forest → cream → cream-darker → [ONE accent block] → cream → forest
```

## 3.3 Typography rules 🔒 LAW
- Headlines are **Fraunces**, weight 500, with `text-balance`.
- **Every headline has exactly one italic accent word** wrapped in `<em>`. The CSS rule `h1 em, h2 em, h3 em { @apply font-serif italic font-medium; color: inherit; }` already handles styling.
  - ✅ `Turn any idea into a <em>stunning</em> visualization`
  - ❌ no `<em>`, or two `<em>`s, or a bold `<strong>` instead.
- Body/UI is **Inter**. Body copy is `text-ink-secondary` on light, `text-ink-on-dark-secondary` on dark.
- One `<h1>` per page (the hero). Everything else `<h2>`/`<h3>` in order.

## 3.4 Reduced motion 🔒 LAW
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration:.01ms!important; animation-iteration-count:1!important;
    transition-duration:.01ms!important; scroll-behavior:auto!important;
  }
}
```

---

# 4. Color usage map

| Element | Light section | Dark (`forest`) section |
|---|---|---|
| Page background | `bg-cream` / `bg-cream-darker` | `bg-forest` |
| Headline | `text-ink-primary` | `text-ink-on-dark-primary` |
| Body | `text-ink-secondary` | `text-ink-on-dark-secondary` |
| Primary button | `.btn-primary` (dark fill, cream text) | `.btn-accent` (lavender fill) |
| Card | `.card` (cream-lighter + 1.5px ink border) | `.card-dark` (forest-light + cream/20 border) |
| Eyebrow pill | `.pill-lavender / -lime / -pink` | `.pill-cream` |
| Decorative dots | — (light stays clean) | lime/pink/sky at 40–70% opacity |
| Sparkles ✦ | only in CTA | lime/pink/sky/lavender at 40–50% |

---

# 5. The four-point sparkle ✦ (accent glyph) 🔒 LAW
The **only** allowed "AI/magic" glyph (replaces any third-party brand mark). A four-point star, lavender by default.
```html
<svg viewBox="0 0 24 24" fill="currentColor" class="text-accent-lavender" aria-hidden="true">
  <path d="M12 1.5c.4 4.6 1.4 8.6 4.4 10.5-3 1.9-4 5.9-4.4 10.5-.4-4.6-1.4-8.6-4.4-10.5 3-1.9 4-5.9 4.4-10.5Z"/>
</svg>
```
Used inline in CTAs and beside section eyebrows. Never use a brand logo for "AI."

---

# 6. THE LOGO — use this exact mark 🔒 LAW

Your real mark is a **plain black org-chart icon: one rounded square up top, two below, joined by clean connectors. No disc, no fill, no background.** (It is the icon in `web-app-manifest-*.png`.)

## 6.1 Light version (default — on cream/light)
```html
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="vc-logo" aria-hidden="true">
  <rect x="19" y="7"  width="10" height="10" rx="2.5" stroke="#0A0A0A" stroke-width="2"/>
  <path d="M24 17 V23 M13 23 H35 M13 23 V31 M35 23 V31"
        stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="8"  y="31" width="10" height="10" rx="2.5" stroke="#0A0A0A" stroke-width="2"/>
  <rect x="30" y="31" width="10" height="10" rx="2.5" stroke="#0A0A0A" stroke-width="2"/>
</svg>
```

## 6.2 Dark version (on `forest` footer) — only the stroke color changes
Duplicate 6.1 and replace **every** `stroke="#0A0A0A"` with `stroke="#F4EFE2"`. Nothing else changes.

## 6.3 Navbar lockup
```html
<a href="/" class="flex items-center gap-2.5" aria-label="VisualCraft home">
  <!-- icon from §6.1, rendered ~22px -->
  <span class="vc-logo-wrap h-[22px] w-[22px] inline-block">{/* SVG 6.1 */}</span>
  <span class="font-serif text-xl leading-none">VisualCraft</span>
</a>
```
Rules:
- **🔒 The icon stroke is hardcoded** (`#0A0A0A` light / `#F4EFE2` dark). It must NOT use `currentColor` or inherit text color — that's what produced the wrong/broken logo before.
- Wordmark: Fraunces, `leading-none` so it baseline-aligns with the icon.
- Icon size in navbar: 20–24px. In footer wordmark lockup: 28–32px. Never stretch; keep the 48×48 viewBox ratio.
- ❌ Never wrap it in a colored disc. ❌ Never recolor the squares to an accent. ❌ Never substitute the old 3-node-graph mark.

## 6.4 Footer wordmark (Wispr "Flow" pattern)
Big wordmark at the very bottom: the §6.1 icon (dark variant, ~36px) + `VisualCraft` in Fraunces at a large size (`text-5xl md:text-7xl`), on `forest`. This echoes Wispr's giant "Flow" footer.

---

# 7. Core components (define in global.css)

```css
/* Buttons — pill, 1.5px border, hard-edge depth, lift on hover */
.btn-primary   { @apply inline-flex items-center justify-center rounded-btn border-1.5 border-ink-primary
                 bg-ink-primary text-cream px-5 py-2.5 font-medium shadow-btn
                 transition-all duration-200 hover:shadow-btn-hover hover:-translate-y-0.5; }
.btn-secondary { @apply btn-primary bg-cream text-ink-primary; }
.btn-accent    { @apply btn-primary bg-accent-lavender text-ink-primary; }
.btn-ghost     { @apply inline-flex items-center rounded-btn px-4 py-2 font-medium
                 text-ink-primary hover:bg-ink-primary/5 transition-colors duration-200; }

/* Pills / eyebrows */
.pill-lavender { @apply inline-flex items-center rounded-btn border-1.5 border-ink-primary
                 bg-accent-lavender text-ink-primary px-3 py-1 text-sm font-medium; }
.pill-lime  { @apply pill-lavender bg-accent-lime; }
.pill-pink  { @apply pill-lavender bg-accent-pink; }
.pill-cream { @apply pill-lavender bg-cream text-ink-primary; }

/* Cards */
.card      { @apply bg-cream-lighter rounded-card border-1.5 border-ink-primary p-6; }
.card-dark { @apply bg-forest-light rounded-card border-1.5 border-cream/20 text-cream p-6; }

/* Headlines */
.headline-display { @apply font-serif font-medium text-display text-balance; }
.headline-h1      { @apply font-serif font-medium text-h1 text-balance; }
.headline-h2      { @apply font-serif font-medium text-h2 text-balance; }
h1 em, h2 em, h3 em { @apply font-serif italic font-medium; color: inherit; }

/* Layout */
.section        { @apply py-20 md:py-28; }
.container-page { @apply max-w-container mx-auto px-5 sm:px-6 lg:px-8; }

/* Inputs (wizard, etc.) */
.field { @apply w-full rounded-card-sm border-1.5 border-ink-primary bg-cream-lighter
         px-4 py-3 text-ink-primary placeholder:text-ink-tertiary
         focus:outline-none focus:ring-2 focus:ring-accent-lavender-dark focus:ring-offset-2 focus:ring-offset-cream; }
```

### Navbar (floating cream pill) 🔒 pattern
`sticky top-4 z-50`, inner `rounded-btn bg-cream/95 backdrop-blur border-1.5 border-ink-primary shadow-card px-4 py-2`, centered with `container-page`. Logo lockup left (§6.3), links center/right with active state (filled `bg-ink-primary text-cream` on current page), a `.btn-primary` "Create" CTA, and a hamburger that toggles a dropdown **inside** the pill on mobile.

---

# 8. Decorative language — and where it's allowed 🔒 LAW

| Element | What | Allowed where | Max | Notes |
|---|---|---|---|---|
| Squiggle | hand-drawn SVG line | one near a headline | 1/section | accent color, `aria-hidden` |
| Dots | small filled circles | dark sections only | ~3/section | accent @40–70%, `aria-hidden` |
| Sparkles ✦ | §5 glyph | CTA sections only | ~4 | accent @40–50%, `aria-hidden` |
| Card rotation | `-rotate-1`/`rotate-1` | grids of 2–4 cards | — | straighten on hover; never on a single full-width card |
| Arced text | curved heading flourish | hero only, optional | 1 | from Wispr hero; skip if it crowds |

All decorative elements are `aria-hidden="true"` and carry no meaning.

```html
<!-- Squiggle component -->
<svg class="w-28 text-accent-orange" viewBox="0 0 120 24" fill="none" stroke="currentColor"
     stroke-width="3" stroke-linecap="round" aria-hidden="true">
  <path d="M4 14 C18 2,30 26,44 14 S70 2,84 14 S110 26,116 12"/>
</svg>
```

---

# 9. Section patterns (mapped to the Wispr Flow screenshots)

Use these as drop-in blueprints. Each maps to a thing you liked in the references.

1. **Display hero (cream).** Centered `headline-display` with one `<em>`; eyebrow pill above; one-line subhead in `text-ink-secondary`; primary + secondary buttons; a faint squiggle top-left; optional arced text. *(Wispr "Don't type, just speak.")*
2. **Dark feature block (forest).** `headline-h2`, supporting copy, and a product visual (mockup / illustration) to the side; 2–3 decorative dots. *(Wispr "Write faster in all your apps.")*
3. **Trust strip.** A slim band reading "Built for people who think visually" with **text-only** proof or our own ✦ marks — **no third-party logos**. *(Replaces Wispr's logo bar.)*
4. **Centered statement (cream).** One huge `headline-display`/`h1` with an underline-squiggle under the `<em>` word. *(Wispr "4x faster than typing.")*
5. **Pill-filter toggle row.** A row of `.pill-*` toggles (e.g., categories). One active = filled. *(Wispr "Made for the way you work.")*
6. **List cards (dark).** `.card-dark` with stacked rounded inner rows. *(Wispr "Personal dictionary / Snippet library.")*
7. **Accent peak block (ONE per page).** A full `bg-accent-lavender` section with `headline-h2`, a checklist of `.card` items, and a CTA. *(Wispr "Flow, wherever you work.")*
8. **Testimonial / stat cards.** Slightly rotated `.card`s with quotes + big-number stat cards in lavender/lime. *(Wispr "Love letters to Flow.")*
9. **Circular values diagram (about).** Nodes on a ring joined by thin curved lines, the logo mark in the center. *(Wispr about-page values wheel.)* Build with SVG: a center group + 4–6 nodes positioned on a circle + curved `path` connectors.
10. **Photo-overlay CTA.** Big serif over a blurred motion image, buttons below, dotted arc flourish. *(Wispr "Start flowing.")* Use a CSS gradient/blur if no photo.
11. **Giant wordmark footer.** §6.4.

---

# 10. ICON SYSTEM — the duplicate fix

This section fixes the two bugs you reported: **(a)** scatter/bubble looked identical, **(b)** impact-map/logic-model/theory-of-change were all the same. The cause was reusing one skeleton across types.

## 10.1 Anti-duplication law 🔒 LAW
**Every icon must look like the specific thing it represents. No two icons in the whole set may share the same shape skeleton.** If two recipes would render the same, the more generic one must change. Before shipping, lay all 76 in the `/_icons` review grid and scan for twins — any twin is a bug.

## 10.2 Visual language 🔒 LAW
```
viewBox 0 0 96 96    ·    all content inside 20–76 (generous margins)
stroke #1F2D24 (forest ink — NOT pure black)   ·   stroke-width 1.5   ·   round caps & joins
fills: NONE, except the ONE accent element per icon
ONE accent color per icon (per-category, see 10.3)   ·   ≤ 6 elements
no text, no logos, no gridlines, no gradients, no shadows
prefer 1–2 deliberate curves for an organic, Napkin-style feel
```
Accent element = the single shape that gets `fill="{accent}"` (or, for areas, `fill="{accent}" fill-opacity="0.15"`). Everything else is stroke-only.

## 10.3 Per-category accent color 🔒 LAW
```
lavender #B5A5F0 → mindmap, brainstorming, business, metaphors, narrative
sky      #A8D4F0 → process, hierarchy
lime     #D4E84A → data, cause
pink     #F4A8C9 → timelines, parts
orange   #F26835 → comparison, problems
```

## 10.4 Reference icons (gold standard — copy these exactly)

These nail the families you flagged. Match their construction for the rest.

**central-node-map** (mindmap · lavender)
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <line x1="48" y1="48" x2="28" y2="28"/><line x1="48" y1="48" x2="70" y2="26"/>
  <line x1="48" y1="48" x2="26" y2="66"/><line x1="48" y1="48" x2="72" y2="64"/>
  <circle cx="28" cy="28" r="6"/><circle cx="70" cy="26" r="6"/>
  <circle cx="26" cy="66" r="6"/><circle cx="72" cy="64" r="6"/>
  <circle cx="48" cy="48" r="10" fill="#B5A5F0"/>
</svg>
```

**bar-chart** (data · lime) — vertical bars, tallest filled
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M24 22 V74 H76"/>
  <rect x="32" y="54" width="9" height="20"/>
  <rect x="47" y="40" width="9" height="34" fill="#D4E84A"/>
  <rect x="62" y="48" width="9" height="26"/>
</svg>
```

**scatter-plot** (data · lime) — dots all the SAME size; one filled
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M24 22 V74 H76"/>
  <circle cx="36" cy="60" r="3.5"/><circle cx="46" cy="48" r="3.5"/>
  <circle cx="58" cy="54" r="3.5"/><circle cx="64" cy="36" r="3.5"/>
  <circle cx="40" cy="38" r="3.5"/>
  <circle cx="54" cy="30" r="3.5" fill="#D4E84A"/>
</svg>
```

**bubble-chart** (data · lime) — circles of CLEARLY different sizes; largest filled
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M24 22 V74 H76"/>
  <circle cx="38" cy="58" r="4"/>
  <circle cx="60" cy="40" r="11" fill="#D4E84A"/>
  <circle cx="66" cy="62" r="6"/>
</svg>
```
> 🔒 scatter = equal dots; bubble = unequal circles. They must never look alike.

**impact-map** (cause · lime) — central goal, arrows radiating OUTWARD to effects
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <circle cx="34" cy="48" r="9" fill="#D4E84A"/>
  <path d="M43 44 L66 32 M70 32 l-5 0 0 5"/>   <!-- arrow up-right -->
  <path d="M45 48 L68 48 M68 48 l-4 -3 0 6 z"/> <!-- arrow right -->
  <path d="M43 52 L66 64 M70 64 l-5 0 0 -5"/>   <!-- arrow down-right -->
</svg>
```

**logic-model** (cause · lime) — LEFT→RIGHT pipeline of boxes, last filled
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <rect x="20" y="40" width="14" height="16" rx="2"/>
  <path d="M34 48 H40"/>
  <rect x="40" y="40" width="14" height="16" rx="2"/>
  <path d="M54 48 H60"/>
  <rect x="60" y="40" width="16" height="16" rx="2" fill="#D4E84A"/>
</svg>
```

**theory-of-change** (cause · lime) — BOTTOM-UP ascent to a goal at top
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <rect x="32" y="62" width="32" height="10" rx="2"/>
  <path d="M48 62 V54 M48 54 l-4 5 8 0 z"/>     <!-- up arrow -->
  <rect x="36" y="40" width="24" height="10" rx="2"/>
  <path d="M48 40 V32 M48 32 l-4 5 8 0 z"/>     <!-- up arrow -->
  <path d="M48 18 l5 9 -10 0 z" fill="#D4E84A"/> <!-- goal star/peak -->
</svg>
```
> 🔒 impact-map radiates outward · logic-model flows sideways · theory-of-change climbs upward. Three different motions, three different icons.

**org-chart** (parts · pink) — mirrors the brand mark but in icon spec
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <rect x="40" y="22" width="16" height="14" rx="2.5" fill="#F4A8C9"/>
  <path d="M48 36 V46 M30 46 H66 M30 46 V58 M66 46 V58"/>
  <rect x="22" y="58" width="16" height="14" rx="2.5"/>
  <rect x="58" y="58" width="16" height="14" rx="2.5"/>
</svg>
```

**funnel-chart** (process · sky) — stacked trapezoids narrowing down, bottom filled
```html
<svg viewBox="0 0 96 96" fill="none" stroke="#1F2D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M24 26 H72 L62 42 H34 Z"/>
  <path d="M34 46 H62 L55 60 H41 Z"/>
  <path d="M41 64 H55 L51 76 H45 Z" fill="#A8D4F0"/>
</svg>
```

## 10.5 Full depiction table — all 76 (distinct recipes) 🔒 LAW
Format: each row = what to draw so it's unmistakable AND unlike its siblings. Accent = per §10.3. Reference rows above are marked ✅.

### MINDMAP (lavender)
| id | Draw |
|---|---|
| central-node-map ✅ | 1 filled center node, 4 lines to 4 outer circles |
| tree-mindmap | root node at top, branches down to 2, each to 2 (1→2→4 tree); root filled |
| concept-web | 5 nodes interlinked by many crossing lines (mesh, no hierarchy); one node filled |
| fishbone-mindmap | horizontal spine + 4 diagonal ribs, ends in a filled circle head (idea spine) |

### PROCESS (sky)
| id | Draw |
|---|---|
| linear-flowchart | box → diamond → box, left-to-right with arrows; diamond filled |
| swimlane-diagram | 2 stacked lanes (divider line), 2 boxes per lane; one box filled |
| circular-process | 4 curved arc-arrows forming a clockwise cycle (open center); one arrow filled |
| funnel-chart ✅ | 3 stacked trapezoids narrowing down; bottom filled |
| user-journey-map | horizontal path of 4 stage dots + a wavy "emotion" line above; one dot filled |

### DATA (lime)
| id | Draw |
|---|---|
| bar-chart ✅ | axes + 3 vertical bars; tallest filled |
| horizontal-bar-chart | axes + 3 horizontal bars from left; longest filled |
| grouped-bar-chart | axes + 2 groups of 2 adjacent vertical bars; one bar filled |
| stacked-bar-chart | axes + 3 vertical bars each split into 2–3 segments; top segment filled |
| line-chart | axes + zigzag polyline w/ 3 vertex dots; one vertex filled |
| area-chart | axes + polyline with area beneath filled `fill-opacity=.15` (the fill IS the accent) |
| pie-chart | circle cut into 3–4 wedges by radii; one wedge filled |
| donut-chart | ring (circle w/ hole) split into 3 arcs; one arc segment filled/thicker |
| scatter-plot ✅ | axes + 6 equal-size dots; one filled |
| bubble-chart ✅ | axes + 3 unequal circles; largest filled |
| waterfall-chart | floating bars at stepping heights joined by thin step lines; final bar filled |
| heatmap | 4×4 cell grid, a few cells filled at varying density; densest cell is accent |
| treemap | rectangle subdivided into nested rects of different sizes; largest filled |
| sankey-diagram | 2 left nodes → curved bands of varying width → 3 right nodes; thickest band filled |

### TIMELINES (pink)
| id | Draw |
|---|---|
| horizontal-timeline | horizontal line + 4 evenly spaced dots; one dot filled |
| vertical-timeline | vertical line + 3 side dots with alternating content stubs; one dot filled |
| milestone-timeline | horizontal line + 3 diamond/flag markers (not dots); one diamond filled |
| gantt-chart | 3 horizontal bars at different start x and lengths (offset schedule); one bar filled |
| roadmap | forward arrow path with 2–3 waypoint pins; the end arrowhead filled |

### COMPARISON (orange)
| id | Draw |
|---|---|
| side-by-side-table | 2-col × 3-row grid with a header row; header row filled |
| pros-cons-list | 2 columns: left with check ticks, right with × marks, divider; one tick filled |
| vs-diagram | two opposing boxes with a bold diagonal slash between; the slash filled |
| radar-chart | pentagon spider web + inner data polygon; data polygon filled `opacity .15` |
| feature-matrix | 3×3 grid with check/dot marks inside cells; one column of marks filled |
| ranking-chart | podium: 3 bars, middle tallest (1-2-3), small star on the tallest; star filled |
| venn-diagram | 2 overlapping circles; the overlap lens filled |
| quadrant-chart | crossed axes (4 quadrants) + 3 dots; one quadrant tinted + its dot filled |

### BUSINESS (lavender)
| id | Draw |
|---|---|
| swot-analysis | plain 2×2 grid (four empty quadrants); top-left filled |
| pestel-analysis | hexagon split into 6 wedges; one wedge filled |
| business-model-canvas | canvas grid: top row of 3 small blocks over 2 wide bottom blocks; center block filled |
| value-proposition-canvas | a square beside a circle (value map + customer profile); the circle filled |
| porters-five-forces | center box + 4 boxes (up/down/left/right) with inward arrows; center filled |
| okr-framework | one "Objective" box on top + 3 horizontal progress bars; one bar fill |
| bcg-matrix | 2×2 grid with circles of different sizes in cells; the big "star" circle filled |
| ansoff-matrix | 2×2 grid + a diagonal growth arrow bottom-left→top-right; arrow filled |

### BRAINSTORMING (lavender)
| id | Draw |
|---|---|
| idea-cluster | loose cluster of 5 overlapping bubbles (no connectors); one bubble filled |
| how-might-we | a sticky-note box with a large "?" beside it; the note filled |
| crazy-eights | 2×4 grid of 8 small frames; one frame filled |
| affinity-diagram | 3 columns of grouped sticky notes (2–3 each); one column-header note filled |
| lotus-blossom | 3×3 grid with emphasized center + petal ticks radiating; center cell filled |

### PARTS (pink)
| id | Draw |
|---|---|
| org-chart ✅ | 1 top box → 2 boxes (brand-mark shape); top box filled |
| breakdown-tree | 1 top → 3 boxes, one of those breaks into 2 more (asymmetric WBS); top filled |
| radial-hierarchy | center + inner ring of 3 + outer ring of nodes (2 concentric levels); center filled |
| nested-circles | 3 concentric circles (containment); innermost filled |

### PROBLEMS (orange)
| id | Draw |
|---|---|
| root-cause-analysis | vertical "5 Whys" chain: box ↓ box ↓ box, one side branch; top problem box filled |
| fishbone-diagram | Ishikawa: spine arrow into a square "problem" head box + categorized ribs; head filled |
| problem-tree | tree with roots below + branches above + trunk in middle; trunk filled |
| solution-matrix | 2×2 effort/impact grid + a star in the high-impact/low-effort quadrant; star filled |
| risk-matrix | 3×3 grid with the top-right (high-risk) corner cell filled |

### METAPHORS (lavender)
| id | Draw |
|---|---|
| iceberg-model | small tip above a horizontal waterline, large mass below; tip filled |
| pyramid-diagram | triangle split into 3 horizontal tiers (no waterline); top tier filled |
| bridge-diagram | an arch bridging a gap between two banks; the arch filled |
| ladder-of-inference | a vertical ladder (2 rails + rungs) ascending; top rung filled |
| flywheel | a thick ring with center hub + 3 tangential momentum arrows; hub filled |
| funnel-metaphor | a V-cone outline, dots dropping in the top, one drop exiting the bottom; exit drop filled |

### NARRATIVE (lavender)
| id | Draw |
|---|---|
| story-arc | a single rising-then-falling arc with 3 plotted points; the peak point filled |
| before-after | 2 panels + center arrow: left has scattered dots, right has aligned dots; arrow filled |
| heros-journey | a circular journey path + a star at top (call) + a horizontal threshold line; star filled |
| problem-agitate-solution | 3 escalating bands: "!", jagged "!!", then a ✓ box; the ✓ box filled |

### CAUSE (lime)
| id | Draw |
|---|---|
| impact-map ✅ | center goal + arrows radiating outward to effects; center filled |
| logic-model ✅ | left→right pipeline of 4 boxes; last box filled |
| theory-of-change ✅ | bottom-up ascent of boxes to a goal at top; goal filled |
| causal-loop-diagram | 4 nodes in a feedback loop joined by curved arrows + a tiny +/− ; one node filled |

### HIERARCHY (sky)
| id | Draw |
|---|---|
| corporate-org-chart | deep org chart 1→2→4 (more levels than parts/org-chart); top filled |
| decision-tree | a diamond branching into yes/no boxes, one box branches again; top diamond filled |
| taxonomy-tree | sideways/indented classification tree (root left → branches right); root filled |
| sitemap | 1 "home" box on top → a wide row of 3–4 equal page boxes below; home box filled |

> If any two of the above would render identically, change the more generic one until the set has **76 unique skeletons**.

## 10.6 Step-1 card (icon-dominant)
Icon is the hero: rendered at ~70% inside an aspect-square art zone (`bg-cream-lighter`, padding) at the top of each card; type name (Fraunces) + category label below. Grid: 2 cols mobile → 4 cols desktop. Selected = `ring-2 ring-accent-lavender` + lavender-light wash on the art zone + a small checkmark badge top-right + `shadow-hard`. Hover = 1px lift + border darken (no rotation).

## 10.7 Review harness
Render all 76 in `src/pages/_icons.astro` as a labeled grid grouped by category. Scan for twins, broken paths, off-canvas elements, or icons that don't read as their concept. **Delete `_icons.astro` before deploy** and keep it out of the sitemap/robots (already handled in the SEO phase).

---

# 11. Per-page application — fixing the sections that look bad

For each page: enforce §3 cadence, use §7 components, apply the matching §9 patterns. Concrete priorities:

**Home `/`**
- Hero → §9.1 (display hero). Make the headline bigger and confident; one `<em>`; add the squiggle and one secondary button. This is the page's first impression — give it room (`section` padding, max-w-3xl headline).
- Trust strip → §9.3 **text only**, no logos.
- "How it works" → reuse the animated StepFlow; wrap in a cream band.
- Categories preview → §9.5 pill filters + a few §10.6 cards.
- Comparison → honest, restrained; `.card` grid, slight rotations.
- Final CTA → §9.10 photo-overlay or §9.7 accent block + ✦.

**Generate `/generate`**
- 🔒 Replace ALL duplicate icons using §10.5. Verify scatter≠bubble and the cause trio are distinct in `/_icons`.
- Step-1 cards → §10.6 icon-dominant layout.
- Step-2 palette picker → keep the dual-axis filter + popover from Phase 5.6; ensure chips use `.pill-*`.
- Footer hidden here (`hideFooter`).

**Gallery `/gallery`**
- Keep the live demo + marquee, but ensure the "AI tool" panel uses the ✦ glyph and **plain text** only — no brand logos (this was a prior bug source).
- Marquee mini-visuals reuse the §10 visual language so they match the wizard icons.

**About `/about`**
- Add §9.9 **circular values diagram** with the logo mark in the center — this is the standout Wispr about-page move and will make the page feel intentional.
- Transparency = the page's ONE accent block (lavender).
- FAQ accordion stays; ensure focus rings + one-open-or-many behavior is deliberate.
- End with §6.4 giant wordmark footer.

**Everywhere**
- 🔒 Navbar logo = §6 exact SVG, hardcoded stroke, active-page state.
- 🔒 No third-party brand logos anywhere; AI tools named as plain text only.
- One `<h1>` per page; one `<em>` per headline; `.section`+`.container-page` on every block.

---

# 12. Final QA checklist

1. Navbar shows the **correct** org-chart logo (§6), hardcoded stroke, never a disc, never the old 3-node mark.
2. Dark-footer logo uses the cream stroke variant.
3. No raw hex in `.astro` except logo (§6) and icon accents (§10).
4. Every section alternates background; exactly one accent block per page.
5. Every headline: Fraunces + exactly one `<em>`.
6. All 76 icons present, each visually matching its concept.
7. **scatter-plot ≠ bubble-chart** (equal vs unequal circles).
8. **impact-map ≠ logic-model ≠ theory-of-change** (outward vs sideways vs upward).
9. No two icons in `/_icons` share a skeleton; `_icons.astro` deleted before deploy.
10. Per-category accent colors correct on every icon.
11. Buttons/pills/cards use §7 utilities only.
12. Decorative dots/✦/squiggles obey §8 placement limits and are `aria-hidden`.
13. About page has the circular values diagram (§9.9) with the logo at center.
14. No third-party brand logo anywhere; AI tools are plain text.
15. `prefers-reduced-motion` honored; focus-visible rings present on light & dark.
16. One `<h1>` per page; no horizontal scroll at 375px.

When all 16 pass, the site matches the Wispr Flow direction and both reported bugs are gone.
