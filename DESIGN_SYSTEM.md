# Illustrate Words Design System

> A complete visual reference for the Illustrate Words website, inspired by the Wispr Flow aesthetic. Use this document to keep every page consistent — colors, fonts, components, patterns. Reference it any time you're building a new section or unsure about a styling choice.

---

## Table of contents

1. [Brand personality](#1-brand-personality)
2. [Color system](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & layout](#4-spacing--layout)
5. [Borders & radius](#5-borders--radius)
6. [Shadows](#6-shadows)
7. [Buttons](#7-buttons)
8. [Cards](#8-cards)
9. [Pills & badges](#9-pills--badges)
10. [Navigation](#10-navigation)
11. [Section patterns](#11-section-patterns)
12. [Decorative elements](#12-decorative-elements)
13. [Imagery](#13-imagery)
14. [Animations & interactions](#14-animations--interactions)
15. [Iconography](#15-iconography)
16. [Responsive breakpoints](#16-responsive-breakpoints)
17. [Page-level consistency rules](#17-page-level-consistency-rules)
18. [Accessibility](#18-accessibility)

---

## 1. Brand personality

The design is **bold-editorial meets premium-playful**. Think: a high-end magazine that's also fun to read.

**Five visual principles:**

1. **High contrast over subtle** — Sections alternate between cream and deep forest green. Not subtle tints — full color blocks.
2. **Editorial typography** — Big serif headlines with italic accent words. Body text is clean sans-serif.
3. **Strong borders, hard shadows** — Cards have visible 1.5-2px black borders and solid offset shadows (no soft blurs).
4. **Playful flourishes** — Hand-drawn squiggles, asterisks (✦), small scattered dots. The seriousness is undercut with personality.
5. **Saturated accents** — Lavender, lime, pink, orange — used as full-color blocks, not muted tints.

**What it shouldn't feel like:**
- Generic SaaS (rounded corporate blue gradients)
- Notion-clean (all white with subtle gray)
- Brutalist (too harsh, no warmth)
- Cute (too soft, no edge)

---

## 2. Color system

### Backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#F4EFE2` | Main page background, default body |
| `cream-lighter` | `#FAF6EC` | Slightly brighter for elevated cards on cream |
| `cream-darker` | `#EBE5D5` | Subtle variation for sub-sections, trust bars |
| `forest` | `#1F2D24` | Deep dark sections, footer, testimonial backgrounds |
| `forest-light` | `#2A3D32` | Cards/elevated elements on forest backgrounds |
| `forest-darker` | `#152019` | Deepest accents on dark sections |

### Text colors

| Token | Hex | Usage |
|-------|-----|-------|
| `ink-primary` | `#0A0A0A` | Primary text on cream backgrounds |
| `ink-secondary` | `#5C5546` | Secondary text on cream — warm gray with brown undertone |
| `ink-tertiary` | `#8A8270` | Tertiary text, placeholders, captions |
| `ink-on-dark-primary` | `#F4EFE2` | Primary text on forest backgrounds (matches cream) |
| `ink-on-dark-secondary` | `#A8B5AC` | Secondary text on forest — desaturated sage |

### Saturated accents (use as full color blocks, not tints)

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-lavender` | `#5822F4` | Primary CTAs, logo highlights, "ours" indicators |
| `accent-lavender-dark` | `#4114C7` | Lavender hover state |
| `accent-lavender-light` | `#E5DFFF` | Light lavender for selected card backgrounds |
| `accent-lime` | `#D4E84A` | Success states, "love" sections, confirmation marks |
| `accent-lime-dark` | `#B8CC2C` | Lime hover state |
| `accent-pink` | `#F4A8C9` | Decorative cards, testimonials, soft callouts |
| `accent-pink-dark` | `#E988B5` | Pink hover state |
| `accent-orange` | `#F26835` | High-energy callouts, warnings, alerts |
| `accent-orange-dark` | `#D4501F` | Orange hover state |
| `accent-sky` | `#A8D4F0` | Calm sections, info, secondary |
| `accent-sky-dark` | `#7FB5E0` | Sky hover state |

### Usage rules

- **Cream backgrounds:** Default for most content. Use `cream-lighter` for cards that need to stand out slightly. Use `cream-darker` for differentiating sub-sections like trust bars.
- **Forest backgrounds:** Use for impactful sections — testimonials, social proof, dramatic moments, footers. Don't overuse — too much dark feels heavy.
- **Accents:** Use one dominant accent per page section. Don't mix more than 3 accents in a single section. Use accent colors for icon backgrounds, CTAs, and small color blocks — never as text on text.

### Color combinations that work

- **Cream + lavender:** Default for primary CTAs (cream button with lavender hover, or lavender pill on cream)
- **Forest + lime:** Confirmation/success on dark (lime checkmarks on forest background)
- **Cream + pink:** Soft, playful sections (testimonials, use cases)
- **Cream + orange:** High-energy CTAs (final CTA section)
- **Forest + lavender:** Primary CTAs in dark sections (lavender button on forest background)

### Color combinations to AVOID

- Lavender on pink (too washed out, no contrast)
- Lime on cream (lime needs dark backdrop to pop)
- Orange on pink (clashes)
- Two accents adjacent without a neutral between them

---

## 3. Typography

### Font families

| Token | Font | Source | Usage |
|-------|------|--------|-------|
| `font-serif` | **Fraunces** | Google Fonts | Headlines, hero text, italic accents |
| `font-sans` | **Inter** | Google Fonts | Body, buttons, UI, navigation |

**Loading both fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

### Type scale

| Size token | Size (clamp) | Line height | Letter spacing | Weight | Font | Usage |
|------------|--------------|-------------|----------------|--------|------|-------|
| `display` | `clamp(3.5rem, 8vw, 6rem)` | 1.0 | -0.02em | 500 | Fraunces | Hero headline (one per page) |
| `h1` | `clamp(2.5rem, 5vw, 4rem)` | 1.05 | -0.02em | 500 | Fraunces | Page titles, section heroes |
| `h2` | `clamp(2rem, 4vw, 3rem)` | 1.1 | -0.01em | 500 | Fraunces | Section titles |
| `h3` | `clamp(1.5rem, 2.5vw, 2rem)` | 1.2 | -0.01em | 500 | Fraunces | Sub-section titles, card titles |
| `h4` | `1.25rem` | 1.3 | 0 | 600 | Fraunces | Card sub-titles |
| `body-lg` | `1.125rem` to `1.25rem` | 1.6 | 0 | 400 | Inter | Hero subtext, intro paragraphs |
| `body` | `1rem` | 1.6 | 0 | 400 | Inter | Default body text |
| `body-sm` | `0.875rem` | 1.5 | 0 | 400 | Inter | Captions, secondary text |
| `label` | `0.75rem` | 1.4 | 0.05em | 500 | Inter | Uppercase labels, eyebrow text |

### Headline italic accent

The signature move — one or two words inside a headline are italic to create rhythm. Always Fraunces italic (not just CSS-italicized sans).

**Format:**
```html
<h1 class="headline-h1">
  The visual <em>language</em><br />
  of your ideas.
</h1>
```

CSS rule (already in `global.css`):
```css
h1 em, h2 em, h3 em, .headline em {
  @apply font-serif italic font-medium;
  color: inherit;
}
```

**Rules for the italic accent:**
- Use 1 italic word per headline (sometimes 2 if they're connected)
- The italic word should be the emotional or meaningful word (the "verb" or "feeling")
- Never italicize an entire phrase
- Italic words don't change color — same color as the rest of the headline
- The italic adds a subtle slope; Fraunces italic is distinct enough to read as deliberate

### Label / eyebrow text

Small uppercase text used above headlines to categorize a section. Always:
- Inter, font-weight 500
- Letter-spacing 0.05em
- Uppercase via CSS (`tracking-wider uppercase`)
- Color: `text-ink-secondary` on cream, `text-ink-on-dark-secondary` on forest

```html
<span class="label">How it works</span>
```

### Text balance

For headlines and intro paragraphs, use `text-wrap: balance` to prevent orphan words on the last line:

```html
<h1 class="headline-h1 text-balance">
  Long headline that should look balanced
</h1>
```

---

## 4. Spacing & layout

### Container

The standard page container:
- Max width: `1200px` (or `max-w-container` in Tailwind)
- Side padding: `px-5` mobile, `px-6` tablet, `px-8` desktop
- Horizontally centered: `mx-auto`

```html
<div class="container-page">...</div>
```

Where `.container-page` is defined as:
```css
.container-page {
  @apply max-w-container mx-auto px-5 sm:px-6 lg:px-8;
}
```

### Section vertical padding

| Use case | Padding |
|----------|---------|
| Major hero/featured sections | `py-20 md:py-32` |
| Standard content sections | `py-20 md:py-28` (this is `.section`) |
| Compact sections (trust bars, dividers) | `py-12 md:py-16` (this is `.section-tight`) |
| Tight sub-sections (within a larger section) | `py-8 md:py-12` |

### Spacing between elements

Use Tailwind's default scale, but stick to these increments for consistency:

| Context | Spacing |
|---------|---------|
| Between paragraph and next paragraph | `mt-3` to `mt-4` |
| Between heading and supporting paragraph | `mt-3` to `mt-6` |
| Between header block and content grid | `mt-12` to `mt-16` |
| Between row groups in a grid | `mt-6` to `mt-8` |
| Between section header pill and h1 | `mt-4` to `mt-6` |
| Between buttons in a CTA group | `gap-3` |
| Inside card padding | `p-5` for small cards, `p-6` to `p-8` for medium, `p-10` for large |

### Grid systems

Standard grid patterns used throughout:

```html
<!-- 3-column feature grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

<!-- 4-column dense grid -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<!-- 12-column for asymmetric layouts -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
  <div class="md:col-span-5">...</div>
  <div class="md:col-span-7">...</div>
</div>
```

---

## 5. Borders & radius

### Border widths

| Token | Width | Usage |
|-------|-------|-------|
| Default | `1px` | Standard hairline dividers |
| `border-1.5` | `1.5px` | **The signature border** — cards, buttons, pills |
| `border-2` | `2px` | Heavy emphasis (rare, for hero mockups) |

Almost every card, button, pill, and interactive element uses `border-1.5 border-ink-primary` (1.5px black border).

### Border radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-full` | 9999px | Buttons, pills, badges, profile circles |
| `rounded-card` | 20px | Standard cards |
| `rounded-card-sm` | 12px | Small cards, internal mockup elements |
| `rounded-md` | 6px | Small UI elements, chart bars |
| No radius | 0 | Decorative shapes only |

**Rule:** Buttons and pills always `rounded-full`. Cards always `rounded-card`. Don't mix small radius and large radius in the same component.

---

## 6. Shadows

The Wispr Flow look uses **hard offset shadows**, not soft blurs. This gives cards a tactile, "stamped on paper" feel.

### Shadow tokens

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-card` | `0 2px 0 0 rgba(10, 10, 10, 0.08)` | Default card resting state |
| `shadow-card-hover` | `0 8px 24px rgba(10, 10, 10, 0.12)` | Card on hover (soft lift) |
| `shadow-btn` | `0 2px 0 0 rgba(10, 10, 10, 0.15)` | Button resting state |
| `shadow-btn-hover` | `0 4px 0 0 rgba(10, 10, 10, 0.15)` | Button hover (deeper offset) |
| `shadow-hard` | `4px 4px 0 0 rgba(10, 10, 10, 1)` | **The signature shadow** — solid black 4px offset |
| `shadow-hard-lavender` | `4px 4px 0 0 #B5A5F0` | Same but lavender (for variety) |
| `shadow-hard-lime` | `4px 4px 0 0 #D4E84A` | Same but lime |
| `shadow-hard-pink` | `4px 4px 0 0 #F4A8C9` | Same but pink |

### When to use which shadow

- **shadow-card:** Default for resting cards in grids
- **shadow-hard:** Hero mockup, featured cards, anything you want to stand out
- **shadow-btn → shadow-btn-hover transition:** All buttons
- **Colored hard shadows:** Use sparingly for accent elements (1-2 per page)

**Visual effect of shadow-hard:** A card with `shadow-hard` looks like it's been stamped onto the page. The 4px solid black offset gives the illusion of a thick paper card sitting on top of the background.

---

## 7. Buttons

All buttons share:
- `rounded-full` (pill shape)
- `border-1.5 border-ink-primary` (1.5px black border)
- Inter font, medium weight, no uppercase
- Inline-flex with `gap-2` for icon spacing
- `transition-all duration-150`
- Lift on hover (`hover:-translate-y-0.5`)
- Reset on active (`active:translate-y-0`)

### Primary button — `btn-primary`

Dark filled, cream text. Used for the most important action on a page.

```html
<button class="btn-primary">
  Start Generating
  <svg>...arrow...</svg>
</button>
```

```css
.btn-primary {
  @apply inline-flex items-center justify-center gap-2 px-6 py-3.5
         rounded-full font-medium text-cream bg-ink-primary
         border-1.5 border-ink-primary
         transition-all duration-150
         hover:bg-forest hover:-translate-y-0.5
         active:translate-y-0
         shadow-btn hover:shadow-btn-hover;
}
```

### Secondary button — `btn-secondary`

Cream filled, dark text and border. Used for less important actions.

```html
<button class="btn-secondary">Browse Examples</button>
```

```css
.btn-secondary {
  @apply inline-flex items-center justify-center gap-2 px-6 py-3.5
         rounded-full font-medium text-ink-primary bg-cream
         border-1.5 border-ink-primary
         transition-all duration-150
         hover:bg-cream-darker hover:-translate-y-0.5
         active:translate-y-0
         shadow-btn hover:shadow-btn-hover;
}
```

### Accent button — `btn-accent`

Lavender filled, dark text. Used for callouts and energetic CTAs.

```html
<button class="btn-accent">Try Now</button>
```

```css
.btn-accent {
  @apply inline-flex items-center justify-center gap-2 px-6 py-3.5
         rounded-full font-medium text-ink-primary bg-accent-lavender
         border-1.5 border-ink-primary
         transition-all duration-150
         hover:bg-accent-lavender-dark hover:-translate-y-0.5
         active:translate-y-0
         shadow-btn hover:shadow-btn-hover;
}
```

### Ghost button — `btn-ghost`

No fill, no border. Used for tertiary actions like "Cancel" or "Reset".

```html
<button class="btn-ghost">Cancel</button>
```

```css
.btn-ghost {
  @apply inline-flex items-center justify-center gap-2 px-4 py-2
         rounded-full font-medium text-ink-secondary
         transition-colors duration-150
         hover:text-ink-primary hover:bg-ink-primary/5;
}
```

### Button sizes

Default size is `px-6 py-3.5`. For variation:
- **Small:** `px-5 py-2.5 text-sm`
- **Large:** `px-8 py-4 text-base`

### Button icons

- Place icons inside the button using `<svg class="w-4 h-4">` (small) or `w-5 h-5` (default)
- Arrow icons go on the right: → "Click me →"
- Action icons (copy, download) go on the left: "📋 Copy"
- Use Heroicons or simple stroke SVGs — never colored or gradient icons

---

## 8. Cards

The card is the workhorse of this design system.

### Base card — `.card`

```html
<div class="card">
  <h3 class="font-serif text-lg font-medium">Title</h3>
  <p class="text-sm text-ink-secondary mt-2">Description</p>
</div>
```

```css
.card {
  @apply bg-cream-lighter rounded-card border-1.5 border-ink-primary p-6
         transition-all duration-200;
}
```

### Card hover variant — `.card-hover`

Add this class to make a card lift and gain shadow on hover.

```html
<div class="card card-hover">...</div>
```

```css
.card-hover {
  @apply hover:-translate-y-1 hover:shadow-hard;
}
```

### Dark card — `.card-dark`

For cards inside forest-background sections.

```html
<div class="card-dark">...</div>
```

```css
.card-dark {
  @apply bg-forest-light rounded-card border-1.5 border-cream/20 p-6
         transition-all duration-200 text-cream;
}
```

### Card with rotation

Slightly rotated cards add the signature playful feel. Use `-rotate-1`, `-rotate-2`, `rotate-1`, or `rotate-2`. Always combine with `hover:rotate-0` so they straighten on hover.

```html
<div class="card card-hover -rotate-1 hover:rotate-0">...</div>
```

**Rule:** Don't rotate more than 3 cards in a single grid (looks chaotic). Use alternating rotations: `-rotate-2`, `rotate-1`, `-rotate-1`.

### Card with colored accent

For cards with a small colored icon circle in the corner:

```html
<div class="card card-hover">
  <div class="w-12 h-12 rounded-full bg-accent-lavender border-1.5 border-ink-primary flex items-center justify-center">
    <!-- icon -->
  </div>
  <h3 class="font-serif text-xl font-medium mt-5">Title</h3>
  <p class="text-ink-secondary mt-2">Description</p>
</div>
```

The icon circle is always:
- 48px to 64px (`w-12 h-12` to `w-16 h-16`)
- `rounded-full`
- Bordered with `border-1.5 border-ink-primary`
- Filled with a saturated accent color
- Rotates 12deg on hover: `group-hover:rotate-12`

### Featured card (hero mockup style)

A larger card with stronger shadow and rotation, used for the hero section mockup or signature visual moments.

```html
<div class="bg-cream-lighter rounded-card border-1.5 border-ink-primary shadow-hard p-6 md:p-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
  ...
</div>
```

---

## 9. Pills & badges

Small rounded labels for categorization and metadata.

### Standard pill

```html
<span class="pill">Standard label</span>
```

```css
.pill {
  @apply inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
         text-sm font-medium border-1.5 border-ink-primary;
}
```

### Color variants

```html
<span class="pill-lavender">Featured</span>
<span class="pill-lime">New</span>
<span class="pill-pink">Beta</span>
<span class="pill-cream">Free</span>
```

```css
.pill-cream { @apply pill bg-cream text-ink-primary; }
.pill-lavender { @apply pill bg-accent-lavender text-ink-primary; }
.pill-lime { @apply pill bg-accent-lime text-ink-primary; }
.pill-pink { @apply pill bg-accent-pink text-ink-primary; }
```

### Pill with status dot

For "live" or "free" indicators:

```html
<span class="pill-cream">
  <span class="w-2 h-2 rounded-full bg-accent-lime"></span>
  Free forever
</span>
```

### Eyebrow pill (above headlines)

Used as a section label above a headline. Always preceded by mt-6 from the headline.

```html
<span class="pill-lavender">Section name</span>
<h2 class="mt-4 headline-h2">Section title</h2>
```

---

## 10. Navigation

### Floating pill navbar

The signature look — the navbar sits inside a rounded cream pill that floats at the top of every page.

**Anatomy:**
- Sticky positioning with `top-4` (16px gap from viewport top)
- Cream background with 1.5px black border
- Full rounded (`rounded-full`)
- Subtle shadow
- Logo on left, links centered, CTA on right
- Mobile: hamburger button instead of links

**Structure:**
```html
<header class="sticky top-4 z-50 px-4">
  <nav class="max-w-container mx-auto bg-cream-lighter border-1.5 border-ink-primary rounded-full shadow-card">
    <div class="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5">
      <!-- Logo -->
      <!-- Center links -->
      <!-- CTA button -->
    </div>
  </nav>
</header>
```

### Logo treatment

The Illustrate Words logo follows a consistent pattern across the site:
- Small colored circle (32-40px) with the icon symbol
- Always lavender (`bg-accent-lavender`) with a 1.5px black border
- Text "Illustrate Words" in Fraunces serif, font-weight 500, next to the circle
- Group hover: circle rotates 12deg

```html
<a href="/" class="flex items-center gap-2 group">
  <div class="w-9 h-9 rounded-full bg-accent-lavender border-1.5 border-ink-primary flex items-center justify-center transition-transform group-hover:rotate-12">
    <!-- SVG icon -->
  </div>
  <span class="font-serif text-xl font-medium">Illustrate Words</span>
</a>
```

### Nav link states

| State | Style |
|-------|-------|
| Default | `text-ink-primary`, no background |
| Hover | `bg-ink-primary/5` (very subtle dark tint) |
| Active (current page) | `bg-ink-primary text-cream` (filled dark pill) |

```html
<a href="/page" class="px-4 py-2 rounded-full text-sm font-medium">
  Link
</a>
```

### Mobile nav

Below 768px:
- Logo + hamburger button visible
- Tapping hamburger toggles a dropdown menu inside the nav pill
- Dropdown shows links stacked vertically + CTA button

---

## 11. Section patterns

### Alternating section backgrounds

To create rhythm, alternate section backgrounds:

```
[cream] → [cream-darker trust bar] → [forest dark] → [cream] → [forest dark] → [cream] → [accent-lavender CTA]
```

**Rule:** Never have two adjacent sections with the same exact background. Even if both are cream, make one `cream-lighter` or `cream-darker`.

### Standard section structure

Every section follows this pattern:

```html
<section class="section bg-cream"> <!-- or bg-forest -->
  <div class="container-page">

    <!-- Section header (centered) -->
    <div class="text-center max-w-3xl mx-auto">
      <span class="pill-lavender">Eyebrow label</span>
      <h2 class="mt-6 headline-h1">
        Section title with <em>italic accent</em>.
      </h2>
      <p class="mt-6 body-lg">
        Supporting paragraph that's max 2 lines.
      </p>
    </div>

    <!-- Content grid (cards, table, etc.) -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      ...
    </div>

  </div>
</section>
```

### Section header variants

**Centered (default):** Used for most sections. Headline + subhead are centered in a `max-w-3xl mx-auto` container.

**Left-aligned:** Used when the section has a side-by-side layout (e.g., text on left, image on right).

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div>
    <span class="pill-lime">Label</span>
    <h2 class="mt-6 headline-h1">Title</h2>
    <p class="mt-6 body-lg">Description</p>
    <a href="..." class="btn-primary mt-8">CTA</a>
  </div>
  <div>
    <!-- Image or illustration -->
  </div>
</div>
```

### Final CTA section

The last section before the footer should be a full-color accent block (usually lavender) with scattered asterisk decorations:

```html
<section class="section bg-accent-lavender relative overflow-hidden border-y-1.5 border-ink-primary">
  <!-- Scattered ✦ decorations -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-12 left-12 text-6xl opacity-30 -rotate-12">✦</div>
    <div class="absolute top-1/2 right-12 text-5xl opacity-30 rotate-12">✦</div>
    <div class="absolute bottom-12 left-1/3 text-4xl opacity-30">✦</div>
  </div>

  <div class="container-page relative text-center">
    <h2 class="headline-h1">Final CTA with <em>italic word</em></h2>
    <p class="mt-6 body-lg !text-ink-primary max-w-2xl mx-auto">Supporting text</p>
    <div class="mt-10 flex gap-3 justify-center">
      <a href="..." class="btn-primary">Primary action</a>
      <a href="..." class="btn-secondary">Secondary action</a>
    </div>
  </div>
</section>
```

---

## 12. Decorative elements

These tiny details give the design its personality.

### Hand-drawn squiggle (Squiggle.astro)

A reusable SVG component you can drop anywhere. Used as small decorative marks, often near headlines or between elements.

```html
<Squiggle color="#B5A5F0" width="120" rotate="-5deg" />
```

**Usage guidelines:**
- Sprinkle 2-4 squiggles per page max
- Vary the colors: lavender, lime, pink, orange
- Vary the rotations: -15deg, -5deg, 5deg, 12deg
- Vary the sizes: 60px, 100px, 150px
- Place near (but not touching) text or visual elements they "comment on"

### Scattered dots

Small colored circles in the background of dark sections. They create depth without being distracting.

```html
<div class="absolute inset-0 pointer-events-none opacity-30">
  <div class="absolute top-12 left-12 w-3 h-3 rounded-full bg-accent-lavender"></div>
  <div class="absolute top-32 right-24 w-2 h-2 rounded-full bg-accent-lime"></div>
  <div class="absolute bottom-32 left-1/4 w-2.5 h-2.5 rounded-full bg-accent-pink"></div>
  <div class="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-accent-orange"></div>
</div>
```

**Rules:**
- Use 4-8 dots per section, scattered asymmetrically
- Vary sizes: 8px, 10px, 12px
- Use multiple accent colors (no more than 4 different)
- Set opacity 20-40% so they recede into the background
- Add `animate-float` for slow vertical drift on hero sections

### Asterisk stars (✦)

Used in CTA sections, especially the lavender final section. Large Unicode characters acting as decorative accents.

```html
<div class="absolute top-12 left-12 text-6xl opacity-30 -rotate-12">✦</div>
<div class="absolute top-1/2 right-12 text-5xl opacity-30 rotate-12">✦</div>
<div class="absolute bottom-12 left-1/3 text-4xl opacity-30">✦</div>
```

**Rules:**
- 3-5 asterisks per section
- Sizes: text-4xl through text-6xl
- Opacity 20-40%
- Vary rotations: -12deg, 0, 12deg, -6deg
- Color: inherits from text (so on lavender section they're darker lavender)

### Underline scribble

Hand-drawn-style underline beneath headline accent words. Defined as a utility class:

```html
<h2 class="headline-h2">
  This word is <span class="scribble-underline">underlined</span> in scribble.
</h2>
```

The `.scribble-underline` class uses an inline SVG background image to draw a hand-drawn wavy line.

### App icon collage

For "works with" sections, scatter app icons in a non-grid layout:

```html
<div class="relative h-32">
  <div class="absolute top-0 left-4 transform -rotate-6">
    <!-- Icon 1 -->
  </div>
  <div class="absolute top-2 left-32 transform rotate-3">
    <!-- Icon 2 -->
  </div>
  <!-- etc -->
</div>
```

Each icon: 48-64px square, rounded-card-sm, border-1.5 border-ink-primary, slight rotation, slight position offset.

---

## 13. Imagery

### Photography guidelines

- **Mood:** Warm, slightly desaturated. Avoid overly bright or punchy stock photos.
- **Crops:** Most images use rounded corners (`rounded-card`) and a 1.5px black border.
- **Aspect ratios:** 16:9 for hero images, 4:3 for content images, 1:1 for portraits.
- **Treatment:** Always wrap in a `border-1.5 border-ink-primary rounded-card overflow-hidden`.

```html
<div class="rounded-card border-1.5 border-ink-primary overflow-hidden">
  <img src="..." class="w-full h-auto" />
</div>
```

### Phone/device mockups

When showing the product on a phone or laptop, use a stylized mockup container:

```html
<div class="bg-cream-lighter rounded-card border-1.5 border-ink-primary shadow-hard p-6 transform -rotate-1 hover:rotate-0 transition-transform">
  <!-- Mockup content -->
</div>
```

### Illustrations vs. real photos

- **Illustrations** preferred for explanatory visuals (process diagrams, abstract concepts)
- **Real photos** for testimonials, founder portraits, "in the wild" use cases
- **Don't mix illustration styles** — pick one approach per page

---

## 14. Animations & interactions

### Animation principles

- **Fast and subtle.** Most transitions are 150-300ms.
- **Use ease-out** for things that decelerate (most cases).
- **No bouncy springs** — keep it polished, not toy-like.
- **Reduce motion** for users who request it (use Tailwind's `motion-safe:` and `motion-reduce:` modifiers when needed).

### Standard hover states

| Element | Hover transformation |
|---------|---------------------|
| Buttons | `hover:-translate-y-0.5` (lift 2px) |
| Cards | `hover:-translate-y-1 hover:shadow-hard` (lift 4px + hard shadow) |
| Icon circles | `hover:rotate-12` (12deg tilt) |
| Logo | `hover:rotate-12` on the logo circle |
| Rotated cards | `hover:rotate-0` (straighten) |
| Links | Color shift to `text-accent-lavender` |
| Nav links | `hover:bg-ink-primary/5` (subtle dark tint) |

### Keyframe animations (predefined)

| Token | Duration | Usage |
|-------|----------|-------|
| `animate-fade-in` | 500ms ease-out | Page elements fading in on load |
| `animate-fade-in-up` | 600ms ease-out | Cards rising into view |
| `animate-float` | 3s infinite | Subtle vertical drift for decorative dots |
| `animate-wiggle` | 1s infinite | Playful wiggle for fun elements (use sparingly) |

### Stagger delays

For staggered animations in a grid (e.g., cards fading in one by one):

```html
<div class="card animate-fade-in-up delay-100">Card 1</div>
<div class="card animate-fade-in-up delay-200">Card 2</div>
<div class="card animate-fade-in-up delay-300">Card 3</div>
```

Available delays: `delay-100`, `delay-200`, `delay-300`, `delay-400`, `delay-500`, `delay-600`.

### Scroll-triggered animations (optional)

For elements that should animate as they enter the viewport, use IntersectionObserver in a small `<script>` block. Add a class `.scroll-fade` to elements that should fade in:

```html
<div class="scroll-fade opacity-0 translate-y-4 transition-all duration-500">
  Content that fades in on scroll
</div>
```

```javascript
// In a <script> tag
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-4');
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('.scroll-fade').forEach((el) => observer.observe(el));
```

---

## 15. Iconography

### Icon library

Use **Heroicons** (free, outline + solid versions) for all UI icons. SVGs are inlined directly into the HTML for simplicity.

**Standard icon sizes:**
- Small: `w-4 h-4` (16px) — Inside buttons, inline with text
- Default: `w-5 h-5` (20px) — Standalone, in card icon spots
- Large: `w-6 h-6` (24px) — Mobile nav, prominent placements

**Standard icon styling:**
```html
<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" d="..."/>
</svg>
```

### Icon style rules

- **Stroke icons over filled** — Outline style matches the editorial aesthetic better
- **Stroke width 2-2.5** — Heavy enough to read at small sizes
- **Stroke-linecap="round"** and **stroke-linejoin="round"** for friendlier feel
- **No colored icons** — Inherit color from parent (`stroke="currentColor"`)
- **No gradient or 3D icons** — Stay flat

### Emoji as icons

Emojis are used as category icons (🧠 mindmap, 📊 data, etc.) because they're:
- Free
- Universally available
- Add personality
- Don't require an icon library

Use them inside colored circle backgrounds:

```html
<div class="w-14 h-14 bg-accent-lavender rounded-full border-1.5 border-ink-primary flex items-center justify-center text-2xl">
  🧠
</div>
```

### Logo icon

The Illustrate Words logo icon is an open book with lines (words) on the left and a node chart (illustration) on the right:

```html
<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Left Page: text lines representing "Words" -->
  <path d="M4 19.5c0-.8.7-1.5 1.5-1.5H12"></path>
  <path d="M4 4.5c0-.8.7-1.5 1.5-1.5H12v15H5.5C4.7 16.5 4 17.2 4 18V4.5z"></path>
  <line x1="6" y1="6" x2="10" y2="6"></line>
  <line x1="6" y1="9" x2="10" y2="9"></line>
  <line x1="6" y1="12" x2="9" y2="12"></line>
  <!-- Right Page: diagram nodes representing "Illustrate" -->
  <path d="M20 19.5c0-.8-.7-1.5-1.5-1.5H12"></path>
  <path d="M20 4.5c0-.8-.7-1.5-1.5-1.5H12v15h6.5c.8 0 1.5.7 1.5 1.5V4.5z"></path>
  <circle cx="16" cy="7" r="1.5" fill="currentColor"></circle>
  <circle cx="14" cy="12" r="1" fill="currentColor"></circle>
  <circle cx="18" cy="12" r="1" fill="currentColor"></circle>
  <line x1="16" y1="8.5" x2="14" y2="11"></line>
  <line x1="16" y1="8.5" x2="18" y2="11"></line>
</svg>
```

---

## 16. Responsive breakpoints

Use Tailwind's default breakpoints:

| Breakpoint | Min width | Used for |
|------------|-----------|----------|
| (default) | 0px | Mobile-first base styles |
| `sm:` | 640px | Larger phones, small tablets |
| `md:` | 768px | Tablets, the main mobile/desktop split point |
| `lg:` | 1024px | Small laptops |
| `xl:` | 1280px | Desktops |

### Key responsive patterns

**Navigation:**
- Below `md:` — hamburger menu, links hidden
- `md:` and above — horizontal links, CTA visible

**Grids:**
- Default: 1 column
- `sm:` 2 columns (for dense grids only)
- `md:` 3 columns (most common)
- `lg:` 4 columns (for very dense grids)

**Typography:**
- Uses `clamp()` for fluid sizing — no breakpoint-specific font-size needed for headlines
- Body text stays 16px across all breakpoints (Inter is highly readable at 16px)

**Sections:**
- Padding: `py-20` mobile, `md:py-28` desktop
- Container side padding: `px-5 sm:px-6 lg:px-8`

**Cards:**
- Default: full width
- `md:` constrained by grid columns

### Mobile-specific considerations

- Touch targets minimum 44px (most buttons exceed this naturally)
- Horizontal scrolling only intentional (e.g., category pill row) with `scrollbar-hide`
- No tiny text — body text is 16px floor
- Hover states should still work but should also work via touch (no hover-only interactions)

---

## 17. Page-level consistency rules

To keep all 4 pages feeling like one product, every page should follow these patterns:

### Universal page structure

```
┌──────────────────────────────────┐
│ Floating cream pill navbar       │  ← Same on every page
├──────────────────────────────────┤
│                                  │
│ Page-specific hero section       │  ← First section, always cream or accent
│   - Eyebrow pill                 │
│   - Big serif headline           │
│   - Supporting paragraph         │
│   - CTAs (where relevant)        │
│                                  │
├──────────────────────────────────┤
│ Body sections (3-7)              │  ← Alternating backgrounds
│   - Section header pattern       │
│   - Content grid                 │
│                                  │
├──────────────────────────────────┤
│ Final CTA section (lavender)     │  ← Same pattern on every page
├──────────────────────────────────┤
│ Forest footer                    │  ← Same on every page
└──────────────────────────────────┘
```

### Page-by-page guidance

**Home page (`/`):**
- Hero: cream + visual mockup
- Sections alternate: cream → cream-darker → forest → cream → forest → cream → lavender CTA
- 7 sections total
- Footer at bottom

**Generator page (`/generate`):**
- No traditional hero — wizard layout takes over
- Single cream background throughout
- Footer is hidden (`hideFooter={true}`)
- Different layout pattern (sidebar + main) but same colors/typography

**Gallery page (`/gallery`):**
- Short hero with title and filter bar
- Cream throughout (no forest sections)
- Footer at bottom

**About page (`/about`):**
- Hero: dark forest with cream text (different from home)
- Body sections: cream
- FAQ accordion section
- Final CTA + footer

### Shared elements across pages

These should be **byte-for-byte identical** on every page:

- Navbar component (don't customize per page)
- Footer component (don't customize per page)
- Layout shell (HTML head, fonts, meta tags)
- Button styles
- Card styles
- Pill styles
- Color tokens

### Per-page customization is OK for

- Hero design (each page has different needs)
- Section content layout (each page has different grids)
- Use of decorative elements (Home uses more dots, Generator uses none)

---

## 18. Accessibility

### Color contrast

- **Cream backgrounds:** Always use `ink-primary` (#0A0A0A) for primary text — achieves 17:1 contrast ratio
- **Forest backgrounds:** Always use `ink-on-dark-primary` (#F4EFE2) for primary text — achieves 12:1 contrast ratio
- **Accent backgrounds (lavender, pink, lime):** Test contrast — most pass with `ink-primary` text
- **Avoid:** Cream text on cream backgrounds, gray text on cream below 4.5:1 contrast

### Focus states

Every interactive element has a visible focus ring:

```css
*:focus-visible {
  @apply outline-2 outline-offset-2 outline-accent-lavender;
}
```

This applies to buttons, links, inputs, and any element with `tabindex`.

### Keyboard navigation

- All interactive elements reachable via Tab
- Buttons and links activate via Enter or Space
- Mobile menu toggles via Enter on the hamburger button
- Form inputs respect default browser keyboard behavior

### Screen readers

- Use semantic HTML (`<button>`, `<a>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Provide `aria-label` for icon-only buttons
- Use `aria-expanded` for collapsibles
- Decorative elements (squiggles, dots) get `aria-hidden="true"`

### Motion preferences

For users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Text sizing

- Base font size: 16px (browser default — don't shrink it)
- Allow user zoom (no `user-scalable=no` in viewport meta)
- Headlines use `clamp()` so they scale with viewport but stay readable

---

## Quick reference cheat sheet

When building a new section, ask:

1. **What background?** Cream (default), cream-darker (sub-section), forest (impact), accent (CTA)
2. **What eyebrow pill color?** Lavender (default), lime (success), pink (soft), cream (neutral)
3. **What italic accent word in the headline?** Pick one emotional word
4. **What grid layout?** 1, 2, 3, or 4 columns?
5. **What card variant?** Standard, dark, rotated, with icon circle?
6. **What CTA?** Primary, secondary, or accent button?
7. **Any decorative elements?** Squiggle, dots, asterisks?

When in doubt, refer back to this document and the Wispr Flow screenshots.

---

## File structure reference

```
src/
├── styles/
│   └── global.css              # All @layer base, components, utilities
├── layouts/
│   └── Layout.astro            # HTML shell, fonts, meta
├── components/
│   ├── Navbar.astro            # Floating pill navbar (same on every page)
│   ├── Footer.astro            # Dark forest footer (same on every page)
│   └── Squiggle.astro          # Reusable decorative SVG
└── pages/
    ├── index.astro             # Home (cream + forest alternating)
    ├── generate.astro          # Wizard (cream only, no footer)
    ├── gallery.astro           # Examples (cream)
    └── about.astro             # About (forest hero + cream body)

tailwind.config.mjs              # All design tokens
```

---

## What this design system is NOT

- Not a copy of Wispr Flow's content or layout. We borrow visual language, not text.
- Not a static rulebook. If something doesn't work in context, deviate thoughtfully.
- Not exhaustive. Edge cases will come up; use the principles to guide decisions.
- Not finished. Add to this document as the project evolves.

---

## Last word

If a page looks "off" — too plain, too busy, too generic — open the Wispr Flow screenshots and squint. Ask: "What do they have that mine doesn't?" The answer is usually one of:

- A bigger serif headline with italic accent
- More contrast between sections
- A scattered dot or squiggle
- A rotated card or asterisk
- A saturated accent color where I used gray

Add that thing. Don't add more.
