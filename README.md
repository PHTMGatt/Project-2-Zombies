# Project 2: Zombies

A Call of Duty Zombies fan project: an easter egg guide for the Origins map, built as a React app.

## What is in this repository

The app lives in [`Origins EE Guide/`](Origins%20EE%20Guide/):

- React 19, TypeScript and Vite 6, with React Router 7 for navigation
- Routes: `/` (main guide), `/FireStaff`, `/IceStaff`, `/WindStaff`, `/LightningStaff`, one page per staff
- Shared header, nav and footer in `src/components/Layout/`; each staff has its own component and CSS module
- `src/api/` holds small data files and helpers (a `playerStats.json` stub, not wired to a real service)
- ESLint with the typescript-eslint and React hooks rules

The repository root also holds `player_complete_stats.pdf`.

## Run it

Requires Node.js 18 or newer.

```
cd "Origins EE Guide"
npm install
npm run dev        # Vite dev server
npm run build      # tsc -b && vite build
npm run lint
```

## Status

An early project with two commits. The staff guide pages are in place; the stats data is a stub and the staff pages carry a
newsletter sign-up heading. For current work see [Zombies-Hub-2.0](https://github.com/PHTMGatt/Zombies-Hub-2.0).
