# Promote Theme To Root Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the nested Astro project in `theme/` to the repository root and document the new structure for future agents.

**Architecture:** Preserve the existing Astro app and Netlify CMS setup while changing only its filesystem boundary. Root-level commands, config, source, public assets, and docs become the canonical site entry point.

**Tech Stack:** Astro 4, Netlify, Netlify CMS, npm/pnpm lockfiles, plain Astro components and CSS.

---

### Task 1: Promote Project Files

**Files:**
- Move: `theme/src` to `src`
- Move: `theme/public` to `public`
- Move: `theme/assets` to `assets` if needed
- Replace root project files with `theme` equivalents

- [x] Move the maintained Astro source and public assets to the root.
- [x] Replace stale root package/config files with the `theme` project files.
- [x] Remove the emptied nested project directory after preserving useful files.

### Task 2: Patch Config And Docs

**Files:**
- Modify: `astro.config.mjs`
- Modify: `netlify.toml`
- Modify: `.gitignore`
- Modify: `README.md`
- Create: `AGENTS.md`

- [x] Update CMS file paths from `/theme/public/cms/...` to `/public/cms/...`.
- [x] Remove Netlify `base = "theme/"` and publish root `dist`.
- [x] Replace starter-theme README content with site-specific setup notes.
- [x] Add root agent guidance covering commands, architecture, content editing, and deployment.
- [x] Ignore dependencies, generated output, logs, local Netlify state, and OS/editor noise.

### Task 3: Verify

**Files:**
- Inspect generated output and git status.

- [x] Run dependency/build verification from the repository root.
- [x] Inspect git status and diff for unintended changes.
- [x] Report any build or dependency blockers with exact command evidence.
