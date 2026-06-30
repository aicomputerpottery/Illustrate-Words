## Development

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

---

## Coding Tasks (gstack)

When spawning Claude Code (or other agentic coding tool) sessions for work in this repository, tell the session to use `gstack` skills. Use the following guidelines for common tasks:

- **Security Audit**: "Load gstack. Run /cso"
- **Code Review**: "Load gstack. Run /review"
- **QA Test a URL**: "Load gstack. Run /qa https://..."
- **Build a Feature End-to-End**: "Load gstack. Run /autoplan, implement the plan, then run /ship"
- **Plan Before Building**: "Load gstack. Run /office-hours then /autoplan. Save the plan, don't implement."

## Blog Visuals Process (Illustrate Words)

When syncing blog posts (e.g. via `npm run sync-blog` or during `npm run build`), if a cover image is missing, the script will automatically copy a temporary placeholder (`celebration_doodle.png`) and print the required image generation prompt to the console.

**To resolve missing blog cover images:**
1. Read the prompt outputted by the sync script.
2. Use the `generate_image` tool to create the image:
   - **Style**: Playful, hand-drawn vector doodle in Marc Lou style, clean cream background, minimalist SaaS style, dark lines, highlights in orange and purple, cute indie hacker aesthetic.
   - **File Name**: `chart_types_guide_cover` (or similar matching lowercase descriptive name).
3. Copy the generated image to `public/images/blog/[slug].png` (replace the placeholder).
4. Run `npm run build` to verify the image is correct.

