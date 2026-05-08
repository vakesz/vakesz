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
- Editable page bodies in `src/content/pages/` (currently: `about.mdx`).
- Schemas in `src/content.config.ts`.
- Cover images go in `src/assets/covers/` (referenced as
  `../../assets/covers/foo.webp` so Astro `image()` produces responsive
  AVIF/WebP). Body images go in `public/img/` and are referenced as
  `/img/foo.webp`. Remote URLs work too.
- To publish a draft: flip `draft: false` (or remove the line) and push.
- To schedule: set `pubDate` to a future date — it'll appear after the
  next build on/after that date.

## Editing via Pages CMS

Posts, projects, and the about page are wired up to
[Pages CMS](https://pagescms.org) via `.pages.yml` at the repo root.

1. Visit [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Install the Pages CMS GitHub App on this repo (read/write contents).
3. Pick `vakesz/vakesz` from the project list.

What's editable:

- **Posts** — list view sorted by `pubDate desc`, full frontmatter and body.
- **Projects** — same, sorted by `order`.
- **About page** — single-file editor for `src/content/pages/about.mdx`.

Image uploads use one of two media folders:

- `content` (`public/img/`) — default for in-body images, written as
  `/img/...` paths.
- `covers` (`src/assets/covers/`) — wired to the post `cover.src` field,
  written as `../../assets/covers/...` so Astro optimizes them.

Pages CMS commits straight to `main`; Cloudflare Pages rebuilds on every
push, so changes are usually live within a couple of minutes.

## Deploy

Hosted on Cloudflare Pages. Pushes to `main` trigger a build; the project
is configured with:

- Build command: `bun run typecheck && bun run format:check && bun run build`
- Build output: `dist`
- Node version: `22`

Response headers and cache rules live in `public/_headers` (copied to the
site root at build time).
