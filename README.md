# Illustrate Words (VisualCraft)

An open-source AI Prompt Builder for creating stunning visualizations. Easily turn any structured idea, SWOT analysis, mindmap, or roadmap into a precise copy-paste prompt designed for Napkin AI, Gemini, ChatGPT, Claude, or Midjourney.

**Live Application URL**: [https://illustratewords.com](https://illustratewords.com)

---

## Features

- **76 Visualization Types**: Covering 13 categories including Mindmaps, Process flows, Swimlane diagrams, BCG growth matrices, Gantt roadmaps, and more.
- **25 Curated Color Palettes**: Tailored HSL color themes (e.g. Ocean Blue, Forest Sage, Sunset Coral) sorted by mood (professional, creative, natural) and vibe (warm, cool, fresh).
- **Style Adjustability**: Complete control over connector styles (curved, straight, rounded, dashed), icon styles (outline, filled, duotone, none), and typography layout moods.
- **Instant Output**: Automatically compiles specifications into an optimized visual prompt to generate diagrams.
- **Interactive Walkthrough**: The homepage "How it works" section plays real screen-recordings (MP4/WebM) of the builder that auto-advance per step, and a "Try it live" toggle embeds the live app inline so visitors can use it without leaving the page.

---

## Tech Stack

- **Framework**: Astro (Static output mode)
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages / Wrangler

---

## Local Development

To run the application locally:

```bash
# Clone the repository
git clone https://github.com/aicomputerpottery/Illustrate-Words.git
cd Illustrate-Words

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## TestSuite Integration & Verification Loop (TestSprite)

This project is integrated with the **TestSprite CLI** for automated end-to-end frontend testing. 

### What the Verification Loop Covers:
1. **Homepage Smoke Test**: Verifies that the landing page renders correctly with the primary call-to-actions ("Start Generating" and "See Examples").
2. **Core Prompt Generation Flow**: Simulates a complete user session — selecting a visualization type, choosing a color palette, customizing styles (connectors, icons, and layout themes), writing user prompt content, and validating that the output matches the choices.
3. **Gallery Page Smoke Test**: Verifies the showcase page structure and ensures the interactive simulation tabs and stage elements render successfully.
4. **Information Pages Smoke Check**: Verifies that critical utility/info pages (FAQ, About, and Contact) are active and show the correct header text.

### Execute Tests locally:
```bash
# Run all tests in the project suite
testsprite test run --all --project ce3928ae-1214-4611-a6d2-a2dd9e40de92 --wait
```

### CI/CD Pipeline (GitHub Actions)
The project includes a GitHub Actions configuration at `.github/workflows/ci.yml` that automatically:
1. Installs dependencies and runs build checks.
2. Installs the TestSprite CLI.
3. Executes the complete TestSprite test runner automatically on every push or pull request to the `main` branch.

To authenticate TestSprite in the pipeline, store your TestSprite API key/token as a repository secret named `TESTSPRITE_TOKEN`.
