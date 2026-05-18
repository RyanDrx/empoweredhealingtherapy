# Promote Theme To Root Design

## Goal

Make the repository root the canonical Astro project so agents, local developers, and Netlify all use the same entry point.

## Current State

The maintained site lives in `theme/`, while the repository root contains older starter-theme package files, duplicated assets, generated output, and a README for Odyssey Theme. Netlify currently sets `base = "theme/"`, so root commands and root docs do not describe the deployed project.

## Target State

The Astro project files from `theme/` are promoted to the repository root:

- `theme/src` becomes `src`
- `theme/public` becomes `public`
- `theme/astro.config.mjs`, `theme/package.json`, `theme/pnpm-lock.yaml`, `theme/package-lock.json`, and `theme/tsconfig.json` become root project files
- `netlify.toml` builds from the root and publishes root `dist`
- Netlify CMS file paths point at root `public/cms`
- agent guidance lives in root `AGENTS.md`
- `README.md` describes this site rather than the upstream theme

## Non-Goals

This migration does not redesign pages, rewrite site copy, change visual styling, or migrate away from Netlify CMS. It also does not modernize dependencies beyond preserving the versions already used by the working `theme/` project.

## Risks

The largest risk is path drift: CMS config paths, public asset URLs, and Netlify output settings must all agree after the move. Build verification from the repository root is the required proof that the promoted structure is coherent.

## Agent Optimization

Future agents should be able to start from the root, read `AGENTS.md`, run documented commands, and know where content, components, pages, styles, and deployment config live without reverse-engineering the old nested project.
