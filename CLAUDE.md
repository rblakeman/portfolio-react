# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev:ui        # Vite dev server on port 3000
npm run dev:server    # Express server on port 3001
npm run start         # Both UI and server concurrently

npm run build         # Build both UI and server
npm run verify        # format + lint + typecheck (run before committing)
npm run verify:ci     # verify + build (CI gate)
npm run format        # Auto-fix ESLint + Prettier issues
npm run typecheck     # TypeScript validation only
npm run deploy        # Build UI then push to gh-pages
```

No test runner is configured — there are no unit or integration tests.

## Architecture

This is a portfolio site with a React/Vite frontend and a small Express backend.

**Frontend** (`src/`)
- React 19 + TypeScript, built with Vite (rolldown-vite)
- MUI v7 for UI components; FontAwesome for icons
- **Routing is manual**: `App.tsx` holds current page in state and renders pages via a `switch` in `renderContentPage()`. There is no React Router. The `Page` union type lives in `src/pages/typings/index.ts`.
- **No global state management** — navigation state lives in `App.tsx`, everything else uses props and local hooks.
- Styling is inline `React.CSSProperties` objects; MUI's `sx` prop is used for MUI-specific styling.
- Custom hooks in `src/utils/`: `useOnMount`, `useFetch`, `useWindowDimensions`.

**Backend** (`server/`)
- Express 5 serving events data (`event-list.ts`) and static assets.
- Deployed to Vercel (`server/vercel.json`).
- CORS allows `localhost:3000`, `ryanblakeman.com`, `rblakeman.github.io`.
- Dev proxy: Vite proxies `/api` and `/static` to `localhost:3001`.

**Deployment**
- UI → GitHub Pages (`gh-pages` package, deploys `dist/`)
- Server → Vercel

## Key Conventions

- Node `^22.20.0` required.
- TypeScript strict mode is on; no unused locals/parameters allowed (`tsconfig.app.json`).
- ESLint uses flat config (`eslint.config.js`); Prettier is enforced via `npm run lint:prettier`.
- To add a new page: create a file in `src/pages/`, add its name to the `Page` union in `src/pages/typings/index.ts`, add a `case` in `App.tsx`'s switch, and add a menu entry in `src/components/menu_bar.tsx`.
