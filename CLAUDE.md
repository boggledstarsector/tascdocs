# tascdocs

Documentation site for **Terraforming and Station Construction** (TASC), a mod for the game *Starsector* by boggled. The site hosts in-depth reference pages for the buildings, structures, and mechanics the mod adds, complementing the in-game tooltips with detailed costs, supply/demand, AI core behavior, and other notes pulled from the mod's source.

The TASC mod itself lives outside this repo at `C:\Program Files (x86)\Fractal Softworks\Starsector\mods\tasc`. That folder contains the authoritative game data (`data/campaign/industries.csv`, `data/config/LunaSettings.csv`) and Java sources (`src/boggled/campaign/econ/industries/Boggled_*.java`) that the docs pages describe.

## Tech stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript 5**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) for styling
- **ESLint 9** with `eslint-config-next`
- Deployed via **Cloudflare Pages**

## Project layout

- `app/` — Next.js App Router routes and shared components
  - `app/docs/<slug>/page.tsx` — per-building / per-topic route wrappers
  - `app/components/` — shared UI (`Banner`, `NavigationHeader`, `ButtonFooter`, etc.)
  - `app/components/terraforming/buildings/` — one content component per building
- `public/images/` — building icons, commodity icons, AI core icons, and other static assets
- `docs/` — repo-internal authoring guides (not shipped in the site)

## Common commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — run ESLint

## Authoring guides

- [Creating new building pages](docs/creating-new-building-pages.md) — step-by-step instructions for adding a docs page for a TASC building, including how to derive costs, supply/demand, AI core effects, improvement bonus, and pather interest from the mod's CSV and Java sources.
