# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing site for Elevate 4x4 Touring Solutions (Sunshine Coast, QLD) — custom ute trays, canopies, and auto electrical. Next.js (Pages Router), React 19, Tailwind CSS 4, Framer Motion. Deployed on Vercel, GitHub repo `Elevate4x4/elevate-website`.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint
```

There is no test suite configured in this repo.

## Architecture

- **Pages Router** (`pages/`), not the App Router. Each file is a route: `index.js` (home), `auto-electrical.js`, `canopies-trays.js`, `policies.js`. `pages/_app.js` is the shared shell (imports global CSS), `pages/_document.js` sets up the HTML document and loads the Inter font.
- **Path alias**: `@/*` maps to the repo root (`jsconfig.json`), e.g. `@/components/ProductGrid`.
- **Styling**: Tailwind 4 utility classes throughout; `styles/globals.css` for global styles. No CSS modules.
- **Animation**: Framer Motion is used site-wide for transitions (nav, hero, hover states) — follow existing patterns in `components/Navbar.js` when adding motion.
- **Quote/contact form**: `pages/index.js` submits directly to a Formspree endpoint (`https://formspree.io/f/xnnzowzl`) via client-side `fetch`, no API route or backend involved.
- **SEO**: pages set metadata via `next/head` and inline JSON-LD (`LocalBusiness` schema) directly in the page component — see the `jsonLd` object at the top of `pages/index.js` for the pattern (business address, phone, service area).
- **Cart**: `context/CartContext.js` + `data/products.js` implement a basic cart (add/remove, in-memory state), but `CartProvider` is not wired into `pages/_app.js` and `ProductGrid`/product pages don't currently consume it — treat this as unfinished/unused scaffolding rather than a live feature unless you're picking it back up.
- `pages/api/hello.js` is the default Next.js starter API route — not used by the app.

## Deployment

Pushing to `main` (or merging a PR into it) triggers a production deploy on Vercel; other branches/PRs get their own Vercel preview deployment URL.
