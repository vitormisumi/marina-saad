## Development

Start dev server in background:

```
astro dev --background
```

Manage with: `astro dev stop`, `astro dev status`, `astro dev logs`.

## Tech Stack

- **Astro 7** with **Tailwind CSS 4** (`@tailwindcss/vite` plugin, not the old PostCSS approach)
- TypeScript (strict mode via `astro/tsconfigs/strict`)
- Node >=22.12.0

## Key Commands

| Command | Purpose |
|---------|---------|
| `astro build` | Production build to `./dist/` |
| `astro check` | Type checking |
| `npx prettier --write .` | Format code (Prettier with astro + tailwind plugins) |

No test framework is configured.

## Project Structure

```
src/
├── pages/         # Routes (file-based routing)
├── components/    # .astro components (Hero.astro, Nav.astro)
├── layouts/       # Layout.astro (HTML shell, lang="pt-BR")
├── styles/        # global.css (imports Tailwind)
└── assets/        # Static assets
```

## Conventions

- Language is **Portuguese (Brazil)** — keep content in pt-BR
- Tailwind is imported via `@import "tailwindcss"` in CSS (v4 style)
- Use `.astro` components unless framework interactivity is needed
- Format with Prettier before committing (astro + tailwind plugins configured)

## Astro Docs

Consult as needed: https://docs.astro.build
