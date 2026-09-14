## Development

Start dev server (background mode is an Astro 7 feature):

```
astro dev --background
```

Manage it: `astro dev stop`, `astro dev status`, `astro dev logs`. Foreground/port/other flags: `astro dev --help`.

## Tech Stack

- **Astro 7** + **Tailwind CSS 4** via `@tailwindcss/vite` (not PostCSS)
- TypeScript strict (`astro/tsconfigs/strict`), Node >=22.12.0
- Icons via `astro-icon`; fonts via Astro `fontProviders` (Google)
- Deploys to Netlify; `site` in `astro.config.mjs` is a placeholder (TODO: real domain once bought)

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` / `npm run build` / `npm run preview` | Astro scripts |
| `npx astro check` | Type check (expect `0 errors, 0 warnings, 0 hints`) |
| `npx astro sync` | Regenerate `astro:content` types after editing `src/content.config.ts` |
| `npx prettier --write .` | Format (astro + tailwind class-sort plugins) |

No test framework, lint, or typecheck npm scripts. Verify with `npx astro check` then `npm run build`.

## Content Collections

All site copy lives in `src/content/<collection>/*.md`; schemas are in `src/content.config.ts`. Adding/editing content is a Markdown change — no component code needed.

- Collections: `services`, `testimonials`, `events`, `mediaMentions`, `faqs`, `processSteps`, `painPoints`.
- Most have an `order` field; pages sort by it. Slugs/URLs come from filenames.
- `services.img` is a relative path to `src/assets/` and is validated by Zod `image()`.
- `content.config.ts` changes require `npx astro sync` (`.astro/` is gitignored).

## Architecture Notes

- Centralized constants — edit these, don't hardcode: `src/lib/navigation.ts` (nav), `src/lib/faqs.ts` (FAQ categories), `src/lib/contact.ts` (email, channels; calendar embed URL is a `PLACEHOLDER_CALENDAR_ID`).
- Scroll animations: `.reveal` / `.reveal-item` CSS + `initReveal` from `src/lib/reveal.ts`. Keep `prefers-reduced-motion` handling.
- Images: use `astro:assets` `<Image>`; blob masks via `src/lib/blobMask.ts`.
- Icons use only the installed `cib:` and `circum:` sets; adding another set needs `@iconify-json/<set>`.

## Styling Conventions

- Language is **Portuguese (Brazil)** — keep all content pt-BR.
- Custom theme colors: `foreground`, `background`, `accent`, `secondary`, `tertiary`, `quaternary` (defined as `--color-*` in `global.css`).
- Typography uses the fluid scale in `@theme` (`global.css`); apply the `text-style-*` utilities (`text-style-display`, `text-style-h1`, `text-style-body`, `text-style-lead`, `text-style-eyebrow`, …) rather than raw `text-*` sizes.
- Prefer Tailwind classes; use scoped `<style>` only for complex CSS (masks, keyframes, layout media queries).
- Use `.astro` components unless framework interactivity is required.

## Repo Quirks

- Repo is managed with GitButler (`gitbutler/workspace` branch; commits may be labeled "GitButler Workspace Commit").
- An Astro docs MCP is configured in `opencode.json`; consult https://docs.astro.build as needed.
