# Empowered Healing Counseling

Astro site for Empowered Healing Counseling, built for Netlify with Netlify CMS-managed page content and resource links.

## Quick Start

```bash
npm install
npm run dev
```

Local development runs from the repository root. The old nested `theme/` project has been promoted, so future changes should start from root-level `src/`, `public/`, and `astro.config.mjs`.

## Commands

- `npm run dev` - start the Astro dev server
- `npm run build` - build the production site into `dist/`
- `npm run preview` - preview the production build locally
- `npm run format` - run Prettier across the project

## Project Map

- `src/pages/` - Astro routes
- `src/components/` - shared UI, forms, heroes, sections, cards, and core layout pieces
- `src/layouts/` - page and post layout wrappers
- `src/config/` - navigation, footer, and site settings
- `src/styles/` - reset, theme tokens, typography, and global CSS
- `public/cms/` - JSON content edited through Netlify CMS
- `public/assets/` - public images, fonts, favicons, and CMS-uploaded media
- `astro.config.mjs` - Astro integrations and Netlify CMS configuration
- `netlify.toml` - Netlify build/runtime settings

## Content Editing

Most page copy lives in `public/cms/*.json`. Resource links live in `public/cms/ResourceLinks/*.json`. Page files import those JSON files and render them through Astro components.

When adding new CMS-managed content, update both the JSON file and the Netlify CMS collection in `astro.config.mjs`.

## Deployment

Netlify builds from the repository root with:

```bash
npm run build
```

The output directory is `dist/`.
