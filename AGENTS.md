# AI Agent Guide

This file explains the project for AI coding agents working in this repository. Use it as the first source of local context before changing code.

## Project Summary

This is a personal portfolio for Carlos Aracena built with Next.js, React, Tailwind CSS, Sanity CMS, and Framer Motion. The app presents profile information, introduction, about, projects, skills, resume/education, and recommendations. Content is primarily managed through Sanity, while UI labels and app chrome are handled in code.

The site supports:

- Dark/light theme switching through `next-themes`.
- English/Spanish switching through a custom language provider.
- Sanity Studio at `/studio`.
- Project list and project detail pages.

## Stack

- Framework: Next.js 16 App Router.
- React: React 19.
- Styling: Tailwind CSS 4 with CSS custom properties in `app/globals.css`.
- CMS: Sanity v4 through `next-sanity`.
- Animations: Framer Motion and Lenis smooth scrolling.
- Icons: Lucide React.
- Package manager: pnpm.
- TypeScript: strict mode enabled.

## Architecture

- `app/`: App Router routes and layouts.
  - `app/layout.tsx`: Root layout, metadata, Sanity live preview wiring.
  - `app/(website)/layout.tsx`: Website providers, font, theme, language, smooth scroll.
  - `app/(website)/page.tsx`: Homepage data fetch and section composition.
  - `app/(website)/projects/page.tsx`: Projects listing page.
  - `app/(website)/project/[id]/page.tsx`: Project detail page.
  - `app/studio/[[...tool]]/page.tsx`: Sanity Studio route.
- `components/features/`: Domain sections such as hero, about, projects, skills, resume, recommendations.
- `components/layout/`: Shared layout pieces like profile card, right navigation, smooth scroll.
- `components/providers/`: Client providers for theme and language.
- `components/ui/`: Small reusable UI pieces such as toggles, badges, footer, loading/fallback views.
- `lib/`: Shared utilities, constants, and i18n helpers.
- `sanity/`: Sanity client, queries, schemas, studio config.
- `types/`: Shared TypeScript types for Sanity data.

## Environment

The real environment file is `.env` and should not be committed. The committed template is `.env-local`.

Required fields:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=v2025-12-05
```

The app will fail during build if `NEXT_PUBLIC_SANITY_PROJECT_ID` or `NEXT_PUBLIC_SANITY_DATASET` is missing.

`SANITY_API_WRITE_TOKEN` is only required for write operations such as `pnpm migrate:i18n`.

## Sanity Content Model

The main Sanity document type is `portfolio` in `sanity/schemaTypes/portfolioType.ts`.

Most user-facing text fields are localized objects:

```ts
{
  en: "English text",
  es: "Texto en espanol"
}
```

Sanity fields may still contain old plain strings while content is being migrated. Frontend rendering should keep using the helpers in `lib/i18n.ts` so old and new content both work.

To convert old plain English fields to the localized object shape, run:

```bash
pnpm migrate:i18n
```

This copies existing values into `en` and leaves `es` blank. Spanish content still needs to be written in Sanity Studio.

Use:

- `localize(value, language)` for string/text/portable text fields.
- `localizeArray(value, language)` for arrays such as categories, features, and highlights.

Do not manually read `value.en` or `value.es` in components unless there is a specific reason.

## Internationalization

Language state lives in `components/providers/language-provider.tsx`.

UI copy lives in `lib/i18n.ts`. Add new labels there instead of hardcoding visible text in components.

The language switch component is `components/ui/language-toggle.tsx`. It mirrors the size and interaction pattern of `components/ui/theme-toggle.tsx`.

When adding user-facing text:

- Add it to `lib/i18n.ts`.
- Read it through `useLanguage()`.
- Keep Sanity-authored content in Sanity fields, not in the dictionary.
- Keep UI labels and navigation in the dictionary, not in Sanity.

## Styling And UI Practices

- Prefer existing Tailwind patterns and component structure.
- Keep responsive behavior explicit with stable dimensions for switches, cards, grids, and toolbars.
- Use Lucide icons when an icon exists.
- Avoid introducing new design systems or large abstractions unless they clearly match the app.
- Keep cards reserved for repeated items or framed tools. Do not nest cards.
- Do not use decorative gradient blobs or one-note color palettes.
- Text must fit on mobile and desktop.

## Client And Server Components

Next.js App Router defaults to server components. Any component that uses hooks like `useLanguage`, `useTheme`, `useState`, `useEffect`, Framer Motion hooks, or browser APIs must start with:

```tsx
"use client"
```

Server pages can fetch Sanity data, then pass it into client components for language/theme-aware rendering.

## Data Fetching

Sanity queries live in `sanity/lib/queries.ts`.

Use:

- `sanityFetch` for server route/page fetching and live content support.
- `client.fetch` for client-side fetches, as currently used by the project detail page.

Keep fetch timeouts and `DataFetchFallback` behavior consistent with existing pages.

## Verification

Before finishing meaningful changes, run:

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

Known current lint note: `components/features/projects/ImageModal.tsx` may warn about hook dependencies. Do not refactor it unless the task is related or the warning blocks the requested work.

## Good Practices For Future Agents

- Read the relevant component and nearby patterns before editing.
- Keep changes scoped to the user request.
- Do not remove Sanity fallback support for old plain string fields.
- Do not commit real `.env` values.
- Prefer `apply_patch` for manual file edits.
- Avoid broad refactors, dependency changes, or lockfile churn unless required.
- Use `pnpm` for installs and scripts. Do not recreate `package-lock.json`.
- If changing Sanity schema fields, update `types/sanity.ts` and the rendering helpers/components together.
- If adding new localized content, update both English and Spanish dictionary entries.
