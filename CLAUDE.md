# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Vite)
npm run build     # Type-check + production build (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

There are no tests in this project.

## Architecture

This is a personal portfolio SPA built with React 19 + Vite + TypeScript + Tailwind CSS v4. It is deployed to Vercel; `vercel.json` redirects all routes to `index.html` to support client-side routing.

### Internationalization (i18n)

All user-visible strings are stored in `src/locales/translations.ts` under three top-level keys: `en`, `pt`, `it`. Adding new text requires updating all three language entries.

The i18n flow:
- `LanguageContext` (`src/context/LanguageContext.tsx`) holds the active language state (`'en' | 'pt' | 'it'`).
- `useTranslation` hook (`src/hooks/useTranslation.ts`) resolves dot-separated translation keys (e.g. `t('work.title')`) against the active language object.
- Language switching is handled in the `Menu` component and affects the entire app.
- CVs are served as static PDFs from `public/cv/` in three languages (EN, IT, PT).

### Routing

React Router v7 is used. All routes are defined in `src/routes/routes.tsx`:
- `/` — Home
- `/resume` — Resume / experience
- `/work` — Projects showcase
- `/contact` — Contact form
- `/404` — Not found (also the catch-all redirect target)

The `Menu` component is hidden on `/404`.

### Styling

Tailwind CSS v4 is integrated via the `@tailwindcss/vite` plugin (configured in `vite.config.ts`). Custom animations (`rotate-slow`, `rotate-reverse`) and a custom color (`menu-gray`) are defined in `tailwind.config.ts`. The primary font is JetBrains Mono, loaded from a local asset (`src/assets/fonts/`) and referenced via `font-[JetBrainsMono]` in Tailwind classes.

### Project data (Work page)

Projects are defined as a static array inside `src/pages/Work/indes.tsx` (note the intentional typo in the filename). Each project entry includes `liveUrl`, `githubUrl`, tech tags, and an image URL sourced from `api.microlink.io` for screenshot previews. The Work page renders a preview modal with an `<iframe>` for live interaction.

### SVG imports

SVGs are imported as React components via `vite-plugin-svgr`.
