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
