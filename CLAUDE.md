# VisualCraft

Project configuration, commands, and AI-assisted workflows.

## Development Commands

- Run dev server: `npm run dev` (runs `astro dev`)
- Build production bundle: `npm run build` (runs `astro build`)
- Preview production build locally: `npm run preview` (runs `astro preview`)

## Documentation

- Astro documentation: https://docs.astro.build
- VisualCraft design docs: [visualcraft-docs](file:///Users/user/Prompt-Visualizer-Claude/visualcraft-docs)

---

## gstack Skills

This project uses the Y Combinator `gstack` skill suite for virtual engineering, planning, code reviews, and QA.

### Rules & Integration
- **Web Browsing**: Always use the `/browse` skill from gstack for all web browsing and QA testing.
- **Chrome MCP**: Never use the `mcp__claude-in-chrome__*` tools or other default chrome MCP servers; use `/browse` instead.

### Available gstack Commands
- `/office-hours` — Brainstorm and evaluate product/feature ideas before building.
- `/plan-ceo-review` — CEO/founder-mode plan review.
- `/plan-eng-review` — Engineering manager plan review.
- `/plan-design-review` — Designer plan review.
- `/design-consultation` — Understand product design needs and suggest design system.
- `/design-shotgun` — Generate multiple design variants and collect feedback.
- `/design-html` — Finalize layout design to production-grade HTML/CSS.
- `/review` — Run pre-landing PR code reviews.
- `/ship` — Orchestrated release flow (bump version, update changelog, commit, push, create PR).
- `/land-and-deploy` — Land changes and trigger deployment.
- `/canary` — Monitor post-deploy canary endpoints.
- `/benchmark` — Performance regression testing via browse daemon.
- `/browse` — AI-controlled Chromium web browser.
- `/connect-chrome` — Connect to a running Chrome instance.
- `/qa` — Systematically test a web app and fix bugs.
- `/qa-only` — Perform QA testing and generate report.
- `/design-review` — Visual design quality audit.
- `/setup-browser-cookies` — Copy real cookies into the browse session.
- `/setup-deploy` — Configure deployment scripts.
- `/setup-gbrain` — Initialize local knowledge brain.
- `/retro` — Weekly engineering retro.
- `/investigate` — Root cause bug debugging.
- `/document-release` — Update release docs.
- `/document-generate` — Write documentation for features.
- `/codex` — OpenAI Codex CLI helper.
- `/cso` — Run a security audit (STRIDE/OWASP).
- `/autoplan` — Run sequential CEO, design, eng, and DX reviews with auto-decisions.
- `/plan-devex-review` — Review plan from developer experience perspective.
- `/devex-review` — Audit DX of the codebase.
- `/careful` — Safe shell guardrails.
- `/freeze` — Restrict edits to a specific directory.
- `/guard` — Toggle strict destructive command safety warning.
- `/unfreeze` — Remove freeze directory scope.
- `/gstack-upgrade` — Upgrade gstack workspace skills.
- `/learn` — Save and manage workspace learnings.
