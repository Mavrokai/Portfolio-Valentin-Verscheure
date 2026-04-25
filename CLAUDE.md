# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build locally
```

## Architecture

Single-page portfolio built with **Vue 3 (Composition API) + Vite + Tailwind CSS v4**.

**Entry point:** `src/main.js` initializes EmailJS with a public key, then mounts `App.vue`.

**Component layout** (`src/App.vue` renders them in order):
- `NavBar` — fixed top navigation with smooth-scroll anchor links
- `Hero` — landing section with profile image and intro
- `About` — bio section
- `Skills` — tech stack display
- `Projects` — project cards with screenshots from `public/assets/`
- `Contact` — form wired to `useEmail` composable

**Composables (`src/composables/`):**
- `useAnimations.js` — called once in `App.vue`. Sets up: IntersectionObserver for `.animate-on-scroll` elements (adds `.visible` class), floating particles appended to `<body>`, smooth scroll for anchor links, logo heartbeat interval, and profile image parallax on mousemove. All listeners are cleaned up in `onUnmounted`.
- `useEmail.js` — wraps EmailJS `send()` with reactive `isLoading`, `error`, `success` refs. Uses service `service_lmf8hyk` and template `template_cxqeb2u`.

**Styling:**
- `src/assets/styles/main.css` — imports Tailwind and `animations.css`
- `src/assets/styles/animations.css` — custom keyframes (float, shimmer, text-glow, heartbeat, glitch, wave, shake, spin-slow, zoom-in, particle animations)
- `tailwind.config.js` — custom colors: `portfolio-dark` (#1B0B0A), `portfolio-dark-alt` (#2a1615), `portfolio-amber` (#fbbf24), `portfolio-amber-dark` (#f59e0b)
- `@` alias resolves to `src/`

**Legacy files** (`PortFolio.html`, `script/`, `style/`) are the old vanilla JS/CSS version — no longer used by the Vite build.

**Static assets** live in `public/assets/` (images, CV PDF) and are referenced with `/assets/` paths.
