# Phase 2 — The Data Layer

## Goal
Create the structured data model that powers the app: visualization categories, prompt templates, palettes, style options, gallery prompts, and FAQ content.

## Deliverables
- src/data/visualizations.js
- 13 categories with 60+ sub-types
- 25 curated palettes
- 6 connector styles
- 5 icon styles
- 6 layout moods
- gallery examples
- about FAQ data

## Implementation Notes
- Keep the data in one central file for maintainability.
- Use plain JavaScript objects and arrays.
- Make the structure ready for the generator UI in the next phase.

## Verification
- Ensure the data file imports cleanly.
- Confirm the project still builds after adding the data file.
