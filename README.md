# Aaryan · Game Portfolio

A single-page portfolio for **Aaryan, Gameplay Programmer & Pixel Artist**. It has a dark retro-pixel look in an "Iznik Tile" palette (deep navy, teal for actions, a touch of red-orange and gold), and the Press Start 2P pixel font for headings with Inter for body text. It uses plain HTML, CSS and vanilla JavaScript, with no build step, no frameworks and no backend, so it runs free on GitHub Pages (or Netlify).

## Sections
Hero (with a looping pixel sprite) → Featured Projects (cards that open a case-study modal) → Pixel Art gallery (lightbox) → Skills → About → Early Work Archive → Contact (email, socials, CV download).

## File structure
```
index.html                 page structure + SEO / Open Graph tags
style.css                  all styling (colours & fonts are variables at the top)
script.js                  ✏️ ALL your text/links/projects live in the SITE block at the top
assets/
  images/
    favicon.png            browser tab icon (32×32, from the hero sprite)
    apple-touch-icon.png   phone home-screen icon (180×180)
    hero-sprite.png        hero animation: 4 frames × 16×16, side by side (64×16)
    avatar-placeholder.png About photo → replace with avatar.png
    og-image.png           link-preview image, 1200×630
    projects/              project-1-cover.png … + your GIFs / MP4s
    gallery/               pixel art pieces (export at 1×, the site scales them crisply)
  cv/Aaryan-CV.pdf         your CV (placeholder)
.nojekyll                  tells GitHub Pages to serve files as-is
netlify.toml               only used if hosted on Netlify
```

## Run locally
Open `index.html` in a browser. For a proper local server (recommended), run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Edit your content
Everything personal is in the **`SITE` object at the top of `script.js`**. Anything marked `⚠ SAMPLE` is placeholder content. The only text outside it is the SEO/link-preview tags in the `<head>` of `index.html`, because link-preview bots don't run JavaScript.

Project media supports `"image"` (PNG/JPG/GIF), `"video"` (MP4/WebM with a poster image) or `"youtube"` (paste just the video ID). YouTube embeds lazy-load.

## Publish on GitHub Pages (from scratch)
1. Create a free account at github.com (you already have **Arnoldschawangxzerx**).
2. Click **New repository** and name it exactly `arnoldschawangxzerx.github.io` (your username in lowercase, followed by `.github.io`). Make it **Public** and create it.
3. On the repo page, click **Add file → Upload files**, then drag in *everything in this folder* (`index.html`, `style.css`, `script.js`, `.nojekyll`, the `assets` folder). Click **Commit changes**.
   *(Hidden files like `.nojekyll` may not show in your file browser. It's optional, so skip it if you can't see it.)*
4. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: `main` / `(root)`**, then click **Save**.
5. Wait 1–2 minutes and visit **https://arnoldschawangxzerx.github.io/**.
6. To update later, upload changed files the same way (or use Git: `git add . && git commit -m "Update" && git push`).

> If you name the repo something else (e.g. `portfolio`), your URL becomes `https://arnoldschawangxzerx.github.io/portfolio/`. Update the `canonical`, `og:url`, `og:image` and `twitter:image` tags in `index.html` to match.

## Checklist before you share the link
- [ ] Replace the 3 **sample projects** in `script.js` with real titles, hooks, roles, tools, durations, bullets and **per-game** itch.io + GitHub links.
- [ ] Add real project media to `assets/images/projects/` (16:9 covers, GIFs or MP4s) and update `cover` / `media` paths.
- [ ] Replace the 6 sample gallery pieces in `assets/images/gallery/` with your own art and update titles, notes and **alt text**.
- [ ] Replace the **Early Work** sample entries.
- [ ] Replace `assets/cv/Aaryan-CV.pdf` with your real CV (same file name, or change `cvFile`).
- [ ] Add your photo or pixel self-portrait as `assets/images/avatar.png` and set `avatar` in `script.js`.
- [ ] Optional: draw your own `hero-sprite.png` (4 frames, 16×16) and `favicon.png`.
- [ ] Re-check the skills tags so they're all things you'd happily talk about in an interview.
- [ ] Confirm the URL in the `<head>` of `index.html` matches your live site, then make a new `og-image.png` if you want.
- [ ] Test the link preview by pasting your URL into a LinkedIn post draft or the Discord chat box.
- [ ] Click every link once, and try the site on your phone.

## Ideas once you have more projects
1. **Filterable project archive.** Add tags (Unity, Pixel Art, Jam, Team) and filter buttons so recruiters can jump to the work that fits their role.
2. **Dedicated case-study pages.** Give your best game its own page with a design breakdown, before/after GIFs, code snippets and a post-mortem. This is what studios love to see.
3. **Playable WebGL demo.** Embed a Unity WebGL build (or an itch.io embed iframe) right in the project modal so visitors can play without leaving the site.
