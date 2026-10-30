# AGENTS.md

## What this is
A single-page static portfolio for Aaryan, a game design student and gameplay programmer/pixel artist. **The owner requires plain HTML, CSS and vanilla JS only**, with no frameworks, no build step, no npm, and no backend, because it must deploy unchanged to GitHub Pages. Do not add tooling, bundlers or server code.

## Architecture
- `index.html`: semantic shell: header/nav, 7 sections with empty containers, the project `<dialog>` and the lightbox `<dialog>`. SEO/OG tags are hard-coded in `<head>` because crawlers don't run JS. The hero text is duplicated there as a no-JS fallback and overwritten from data via `data-bind` / `data-bind-href`.
- `script.js`: the top `SITE` object is the **single source of truth for all personal content**. An IIFE below renders projects, gallery, skills, about, archive and contact into the containers and wires up the modal, lightbox (arrow keys), copy-email toast, mobile nav and active-link IntersectionObserver. All interpolated strings go through `esc()`.
- `style.css`: mobile-first. Design tokens are CSS variables in `:root` (Iznik Tile palette: `--bg`, `--surface`, `--primary` for actions/links/hover/focus, `--accent` used sparingly and as text only on `--bg`, `--highlight` for tiny details only, `--text`, `--text-muted`, `--border`, `--shadow`; `--bw` border width, `--px` pixel unit). Use only these variables for colour; the hero scene is mixed from them with `color-mix()`. The pixel look comes from 2px solid borders, a faint dither background and hard offset box-shadows, with `steps()` transitions. A `prefers-reduced-motion: reduce` block at the end disables all motion, and smooth scroll is only enabled under `no-preference`.
- `assets/images/`: tiny native-resolution pixel PNGs (16–24px sprites, 160×90 covers) scaled up with `image-rendering: pixelated`. `hero-sprite.png` is a 4-frame 64×16 sheet animated with `steps(4)`. `og-image.png` is 1200×630.

## Conventions
- Keep content edits in `SITE`; mark placeholder content with `⚠ SAMPLE` comments. The owner edits by hand, so keep comments friendly (`✏️ CHANGE:` notes).
- Pixel font (`--font-pixel`) is for headings/labels only, never body copy. Maintain WCAG AA contrast.
- Every image needs alt text, width/height, `loading="lazy"` and `decoding="async"` (except above the fold). Iframes use `loading="lazy"`.
- Don't use pronouns for the owner in copy. Write in the first person ("I build…").
- `netlify.toml` (publish `.`) exists only for Netlify previews. GitHub Pages ignores it.
