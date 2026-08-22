# DevBlocks — Build. Learn. Ship.

DevBlocks is a free, open developer platform for discovering, previewing and copying
Tailwind CSS UI blocks — plus short lessons that explain *why* the code works. It is built
for CS students, beginner developers and teachers who want production-looking UI without
fighting a design system first.

> Search → Preview → Copy → Learn → Ship

## Features

- **Component library** (`/components`) — 20+ Tailwind blocks (navbars, heroes, auth forms,
  pricing, dashboards, cards…) filterable by category, tech and difficulty.
- **Component detail** (`/components/$slug`) — live preview with desktop / tablet / mobile
  viewport switching, copy-ready markup and a "what you'll learn" breakdown.
- **Starter template + docs** (`/starter`) — a single-file HTML + Tailwind boilerplate and a
  six-step guide from empty folder to a published site, plus a React variant.
- **Code playground** (`/playground`) — edit HTML/Tailwind and see the result render live in a
  sandboxed iframe.
- **Templates** (`/templates`) — full page layouts (portfolio, SaaS landing, dashboard).
- **Project kits** (`/projects`) — bigger, assignment-sized builds for students.
- **Learn** (`/learn`) — bite-sized lessons across HTML, CSS, Tailwind, JavaScript and React,
  each with a code example and a challenge.
- **Favorites** (`/favorites`) — save blocks locally for later.
- **AI Builder** (`/ai-builder`) — placeholder for the upcoming prompt-to-component flow.
- Light/dark theme toggle, keyboard-friendly search and a fully responsive layout.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR-ready) |
| Routing | TanStack Router (file-based, `src/routes`) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (tokens in `src/styles.css`) |
| Build | Vite 7 |
| UI primitives | shadcn/ui + lucide-react icons |

## Getting started

Requires [Node.js](https://nodejs.org) 20+ (or [Bun](https://bun.sh)).

```sh
git clone <this-repository-url>
cd devblocks
npm install
npm run dev
```

The dev server starts on <http://localhost:8080>.

```sh
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```text
src/
  components/        Shared UI: SiteShell, CodeBlock, PreviewPane, ItemCard, ThemeToggle
  lib/
    data/            Seed content: components, templates, projects, lessons, starter
    types.ts         UIComponent, Template, ProjectKit, Lesson, AppUser, Favorite
    favorites.ts     localStorage-backed favorites hook
  routes/            File-based routes (__root, index, components.*, learn.*, …)
  styles.css         Design tokens, fonts and utilities
```

## Design system

All colours, radii and shadows are semantic tokens in `src/styles.css` — never hardcode
colour utilities in components.

- Accent: vivid cyan/teal `oklch(0.62 0.15 192)`
- Neutral surfaces with a first-class dark mode
- Fonts: **Sora** (display), **Manrope** (body), **JetBrains Mono** (code)

## Adding a new block

1. Open `src/lib/data/components.ts`.
2. Append an object with `slug`, `name`, `category`, `difficulty`, `tags`, the Tailwind
   `html` string and a few `learn` bullet points.
3. It automatically appears in the library, search, category counts and detail route.

## Roadmap

- [ ] AI Builder: generate a block from a natural-language prompt
- [ ] Accounts + cloud-synced favorites
- [ ] Framework export (React / Vue / Svelte) per block
- [ ] Community-submitted blocks

## Contributing

Issues and pull requests are welcome. Keep new blocks dependency-free, accessible and
theme-token driven so they work in both light and dark mode.

## License

MIT — use the blocks in personal and commercial projects, no attribution required.
