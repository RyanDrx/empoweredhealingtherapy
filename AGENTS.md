# Agent Guide

## Start Here

This repository is an Astro site for Empowered Healing Counseling. The canonical project root is the repository root. Do not look for or recreate the old nested `theme/` app; it was promoted to root.

## Commands

- Install dependencies: `npm install`
- Start local development: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Format: `npm run format`

Use the root directory for all commands.

## Structure

- `src/pages/` contains routes.
- `src/components/` contains shared UI. Prefer existing section, hero, form, card, and core components before creating new ones.
- `src/layouts/` contains layout shells.
- `src/config/settings.js` contains site metadata.
- `src/config/nav.js` and `src/config/footer.js` control primary navigation and footer links.
- `src/styles/` contains global CSS and design tokens.
- `public/cms/` contains editable JSON content used by page routes.
- `public/assets/` contains public images, fonts, favicons, and CMS media.
- `astro.config.mjs` contains Astro integrations and the Netlify CMS collection schema.
- `netlify.toml` contains deployment settings.

## Content Rules

Most business copy is CMS-backed JSON, not hardcoded page text. Before editing page copy, check `public/cms/*.json` and `public/cms/ResourceLinks/*.json`.

When adding or renaming CMS fields, update:

1. the JSON content file in `public/cms/`
2. the matching collection field in `astro.config.mjs`
3. the Astro page/component that reads the field

## Implementation Rules

- Preserve existing Astro component patterns.
- Keep user-facing design changes separate from structural cleanup unless explicitly requested.
- Do not commit generated `dist/`, local `.netlify/`, dependencies, logs, or editor files.
- Run `npm run build` before claiming structural changes are complete.

## Deployment Notes

Netlify builds from the repository root and publishes `dist/`. The Node version is set in `netlify.toml` and `.nvmrc`.
