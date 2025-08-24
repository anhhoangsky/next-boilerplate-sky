# Next.js Frontend Boilerplate

A modern Next.js App Router starter with TypeScript, Tailwind CSS, shadcn/ui, NextAuth.js, Zustand, TanStack Query, and a curated set of developer tools.

## Getting Started

```sh
bun install
bun run dev
```

## Features

- App Router with marketing and dashboard routes
- Tailwind CSS with shadcn/ui components and lucide icons
- Authentication via NextAuth (Google, GitHub, Email)
- Global state with Zustand and async data with TanStack Query
- Biome for formatting and linting, Husky + commitlint for git hooks
- Jest unit tests and Playwright end‑to‑end tests
- GitHub Actions workflow for lint, test, and build

## Environment

Set the following variables for authentication:

```sh
GITHUB_ID=...
GITHUB_SECRET=...
GOOGLE_ID=...
GOOGLE_SECRET=...
EMAIL_SERVER=...
EMAIL_FROM=...
```

## Scripts

- `bun run dev` – start dev server with Turbopack
- `bun run build` – production build
- `bun run lint` – run Biome lint
- `bun run format` – format with Biome
- `bun run test` – run Jest tests
- `bun run test:e2e` – run Playwright tests
- `bun run analyze` – analyze bundle size
