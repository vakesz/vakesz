# Developing vakesz.com

Personal site at [vakesz.com](https://vakesz.com). Built with
[Astro](https://astro.build) and plain CSS. Managed with [Bun](https://bun.sh).

## Setup

```sh
bun install
bun dev          # http://localhost:4321
```

Drafts (`draft: true` in frontmatter) and future-dated posts show in dev,
hidden in production.

## Build

```sh
bun run build    # astro build
bun run preview
```

## Quality gates

```sh
bun run typecheck     # astro check
bun run format        # prettier --write
bun run format:check  # prettier --check (used in CI)
```

## Writing

- Posts live in `src/content/posts/` (Markdown or MDX).
- Projects in `src/content/projects/`.
- Schemas in `src/content.config.ts`.
- Local cover images go in `src/assets/covers/` and are referenced
  relatively (`../../assets/covers/foo.webp`); remote URLs are also valid.
- To publish a draft: flip `draft: false` (or remove the line) and push.
- To schedule: set `pubDate` to a future date — it'll appear after the
  next build on/after that date.

## Deploy

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
