/* =============================================================
   ✏️✏️✏️  YOUR CONTENT — EDIT EVERYTHING IN THIS BLOCK  ✏️✏️✏️
   You never need to touch index.html or style.css to update text.

   Image paths are relative to index.html. Drop your files in:
     assets/images/projects/  → project covers + GIFs/videos
     assets/images/gallery/   → pixel art pieces
     assets/images/           → avatar.png, og-image.png, hero-sprite.png
     assets/cv/               → Aaryan-CV.pdf

   Items marked  ⚠ SAMPLE  are placeholders — replace before sharing!
   ============================================================= */
const SITE = {
  name: "Aaryan",
  headline: "Gameplay Programmer & Pixel Artist",
  pitch: "I build games from code to pixels: mechanics, levels, and art, all made by me.",
  availability: "Open to internships & junior roles",
  location: "Istanbul, Türkiye",
  tools: "Unity / Aseprite / Blender / Git",

  // Where the hero "Play my games" button goes
  playLink: "https://fenzo-arazi.itch.io/",

  email: "aaryanhussain029@gmail.com",
  cvFile: "assets/cv/Aaryan-CV.pdf", // ⚠ SAMPLE file — replace with your real CV
  avatar: "assets/images/avatar-placeholder.png", // ⚠ SAMPLE — e.g. "assets/images/avatar.png"
  avatarAlt: "Pixel-art avatar of Aaryan",

  // About section — each string becomes its own paragraph
  bio: [
    "I'm a game developer currently pursuing my game design degree at Istanbul Kent University. Right now I'm deep into 2.5D pixel and cartoon-inspired games: worlds that mix crisp sprites with depth, light and a bit of personality.",
    "I'm a gameplay programmer and pixel artist, which means I can take an idea from a C# prototype to animated sprites and a playable level on my own, and I love working with a team that pushes each of those further.",
  ],
  lookingFor:
    "A game development internship or junior role in gameplay programming, technical art or pixel art. I'm happy to work remotely or on-site in Istanbul, and I'm especially excited about small teams making stylised 2D and 2.5D games.",

  // Contact links (shown as buttons in the Contact section)
  links: [
    { label: "itch.io", url: "https://fenzo-arazi.itch.io/" },
    { label: "GitHub", url: "https://github.com/Arnoldschawangxzerx" },
    { label: "ArtStation", url: "https://www.artstation.com/arnorip169" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mohammad-aaryan-hussain-16789b239/" },
    { label: "Instagram", url: "https://www.instagram.com/nowwhataaryan/" },
    // { label: "YouTube", url: "https://www.youtube.com/@your-channel" },
  ],

  /* ---------- FEATURED PROJECTS (exactly 3 looks best) ----------
     media.type can be:
       "image"   → PNG / JPG / GIF  (src = file path)
       "video"   → MP4 / WebM       (src = file path, poster = still image)
       "youtube" → YouTube embed    (src = video ID, e.g. "dQw4w9WgXcQ")
     pixel: true → keeps pixel art crisp when scaled up. Use false for
     smooth/3D screenshots. */
  projects: [
    {
      // ⚠ SAMPLE PROJECT — replace every field
      title: "Lantern Hollow",
      hook: "A 2.5D pixel platformer where your lantern is both your light and your lifeline.",
      role: "Solo developer: programming, art, level design",
      tools: ["Unity", "C#", "Aseprite", "URP 2D Lights"],
      duration: "6 weeks",
      cover: "assets/images/projects/project-1-cover.png",
      coverAlt: "Pixel-art scene: a hooded hero stands on a dark hillside at sunset beside floating coins",
      media: { type: "image", src: "assets/images/projects/project-1-cover.png", alt: "Gameplay of Lantern Hollow" },
      // e.g. media: { type: "image", src: "assets/images/projects/project-1.gif", alt: "…" },
      pixel: true,
      summary:
        "Lantern Hollow is a short atmospheric platformer built around one rule: your lantern slowly runs out of oil, and refilling it means taking risks. I wanted the light itself to be the main mechanic.",
      built: [
        "Wrote a responsive character controller with coyote time, jump buffering and variable jump height, tuned through playtests.",
        "Combined pixel sprites with Unity 2D lights and parallax layers to get a 2.5D sense of depth without losing crisp pixels.",
        "Designed three levels that teach the lantern mechanic through layout alone, with no tutorial text.",
      ],
      playUrl: "https://fenzo-arazi.itch.io/", // ⚠ replace with this game's itch.io page
      codeUrl: "https://github.com/Arnoldschawangxzerx", // ⚠ replace with this game's repo
    },
    {
      // ⚠ SAMPLE PROJECT — replace every field
      title: "Gloop Rush",
      hook: "A top-down arcade game about herding a panicking crowd of slimes to safety.",
      role: "Gameplay programmer & pixel artist (team of 3)",
      tools: ["Unity", "C#", "Aseprite", "Git"],
      duration: "48-hour game jam",
      cover: "assets/images/projects/project-2-cover.png",
      coverAlt: "Pixel-art meadow with two green slimes, a hero and a red mushroom",
      media: { type: "image", src: "assets/images/projects/project-2-cover.png", alt: "Gameplay of Gloop Rush" },
      pixel: true,
      summary:
        "Made for a weekend game jam with two teammates. I owned the slime behaviour and all character art, and we shipped a complete, playable build before the deadline.",
      built: [
        "Programmed simple flocking AI so slimes clump, scatter and follow the player in a readable, funny way.",
        "Built a ScriptableObject-based wave system so designers could tweak difficulty without touching code.",
        "Drew and animated 40+ frames of slime and player sprites in Aseprite, exported as sprite sheets.",
      ],
      playUrl: "https://fenzo-arazi.itch.io/", // ⚠ replace
      codeUrl: "https://github.com/Arnoldschawangxzerx", // ⚠ replace
    },
    {
      // ⚠ SAMPLE PROJECT — replace every field
      title: "Paper Tide",
      hook: "A cartoon-shaded 2.5D boat adventure across hand-modelled islands.",
      role: "Programmer & 3D artist (university project)",
      tools: ["Unity", "C#", "Blender", "Shader Graph"],
      duration: "3 months",
      cover: "assets/images/projects/project-3-cover.png",
      coverAlt: "Pixel-art blue sky over the sea with a hero, a treasure chest and a potion",
      media: { type: "image", src: "assets/images/projects/project-3-cover.png", alt: "Gameplay of Paper Tide" },
      // e.g. media: { type: "youtube", src: "YOUR_VIDEO_ID", alt: "Paper Tide trailer" },
      pixel: true,
      summary:
        "A semester project exploring how far a cartoon look can go in Unity. Players sail between small islands, collecting maps and solving light environmental puzzles.",
      built: [
        "Created a toon shader with outlines in Shader Graph so Blender models match a flat, cartoon art style.",
        "Wrote a lightweight buoyancy and boat-steering system that feels floaty but stays easy to control.",
        "Set up a Git workflow with branches and Unity-friendly .gitignore/LFS for clean team collaboration.",
      ],
      playUrl: "https://fenzo-arazi.itch.io/", // ⚠ replace
      codeUrl: "https://github.com/Arnoldschawangxzerx", // ⚠ replace
    },
  ],

  /* ---------- PIXEL ART GALLERY ----------
     Export from Aseprite at 1× (original size) — the site scales it up
     crisply. Square images look best. Add as many as you like. */
  gallery: [
    // ⚠ SAMPLE ART — replace with your own pieces
    { src: "assets/images/gallery/potion.png", title: "Ember Potion", note: "16×16 item sprite, 12-colour palette.", alt: "Pixel-art red potion bottle with a gold cork" },
    { src: "assets/images/gallery/slime.png", title: "Meadow Slime", note: "Enemy sprite for Gloop Rush.", alt: "Pixel-art green slime with two small eyes" },
    { src: "assets/images/gallery/mushroom.png", title: "Toadstool", note: "Environment prop study.", alt: "Pixel-art red mushroom with white spots" },
    { src: "assets/images/gallery/chest.png", title: "Treasure Chest", note: "Interactable prop with gold trim.", alt: "Pixel-art orange treasure chest with a gold lock" },
    { src: "assets/images/gallery/tree.png", title: "Old Oak", note: "Tileset tree, two-tone shading.", alt: "Pixel-art round green tree with a brown trunk" },
    { src: "assets/images/gallery/coin.png", title: "Gold Coin", note: "Collectible, first frame of a spin cycle.", alt: "Pixel-art shiny gold coin" },
  ],

  /* ---------- SKILLS (plain tags — no fake percentage bars) ---------- */
  skills: [
    { group: "Programming", icon: "⌨", items: ["C#", "Unity scripting", "Character controllers", "State machines", "Gameplay systems", "UI programming"] },
    { group: "Design", icon: "◆", items: ["Level design", "Game feel & juice", "Rapid prototyping", "Playtesting", "2.5D camera & layering"] },
    { group: "Art", icon: "✦", items: ["Pixel art", "Sprite animation", "Tilesets", "Low-poly 3D modelling", "Cartoon / toon shading"] },
    { group: "Tools", icon: "⚙", items: ["Unity", "Aseprite", "Blender", "Git & GitHub", "itch.io publishing"] },
  ],

  /* ---------- EARLY WORK ARCHIVE (compact list) ---------- */
  earlyWork: [
    // ⚠ SAMPLE ENTRIES — replace with your real early games
    { year: "2025", title: "Tiny Dungeon Jam", note: "First game jam entry: a one-room roguelike made in 72 hours.", url: "https://fenzo-arazi.itch.io/", linkLabel: "Play" },
    { year: "2025", title: "Aseprite 30-Day Challenge", note: "One sprite a day to learn palettes, shading and animation.", url: "https://www.artstation.com/arnorip169", linkLabel: "View" },
    { year: "2024", title: "Brick Breaker Clone", note: "Learned Unity physics, collisions and game states.", url: "https://github.com/Arnoldschawangxzerx", linkLabel: "Code" },
    { year: "2024", title: "Roll-a-Ball", note: "My very first Unity project, following the official tutorial.", url: "", linkLabel: "" },
  ],
};
/* =============================================================
   END OF CONTENT — code below builds the page from SITE.
   You shouldn't need to edit anything past this line.
   ============================================================= */

(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  // Escapes text so special characters (<, &, ") can't break the HTML
  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const ext = (url) => `href="${esc(url)}" target="_blank" rel="noopener"`;

  /* ---------- Simple text bindings (hero, nav, footer) ---------- */
  $$("[data-bind]").forEach((el) => {
    const value = SITE[el.dataset.bind];
    if (value) el.textContent = value;
  });
  $$("[data-bind-href]").forEach((el) => {
    const value = SITE[el.dataset.bindHref];
    if (value) el.href = value;
  });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Projects ---------- */
  const projectList = $("#project-list");
  projectList.innerHTML = SITE.projects
    .map(
      (p, i) => `
      <article class="card project-card">
        <div class="project-card__media">
          <img src="${esc(p.cover)}" alt="${esc(p.coverAlt)}" width="480" height="270" loading="lazy" decoding="async"${p.pixel ? "" : ' style="image-rendering:auto"'} />
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">
            <button class="project-card__open" type="button" data-project="${i}" aria-haspopup="dialog">${esc(p.title)}</button>
          </h3>
          <p class="project-card__hook">${esc(p.hook)}</p>
          <p class="project-card__meta"><strong>${esc(p.role)}</strong> · ${esc(p.duration)}</p>
          <ul class="tags" aria-label="Tools">${p.tools.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
          <div class="project-card__footer">
            <span class="project-card__cta" aria-hidden="true">Case study →</span>
            <div class="project-card__links">
              ${p.playUrl ? `<a class="btn btn--small btn--primary" ${ext(p.playUrl)} aria-label="Play ${esc(p.title)} on itch.io">Play</a>` : ""}
              ${p.codeUrl ? `<a class="btn btn--small btn--ghost" ${ext(p.codeUrl)} aria-label="${esc(p.title)} source code on GitHub">Code</a>` : ""}
            </div>
          </div>
        </div>
      </article>`
    )
    .join("");

  /* ---------- Project modal ---------- */
  const dialog = $("#project-dialog");
  const modalContent = $("#modal-content");
  let lastFocus = null;

  function mediaHTML(p) {
    const m = p.media || { type: "image", src: p.cover, alt: p.coverAlt };
    const pixelStyle = p.pixel ? ' class="pixel"' : "";
    if (m.type === "video") {
      return `<video controls muted loop playsinline preload="none" poster="${esc(m.poster || p.cover)}"${pixelStyle}>
                <source src="${esc(m.src)}" />Your browser can't play this video.</video>`;
    }
    if (m.type === "youtube") {
      return `<iframe src="https://www.youtube-nocookie.com/embed/${esc(m.src)}" title="${esc(m.alt || p.title + " video")}"
                loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    }
    return `<img src="${esc(m.src)}" alt="${esc(m.alt || p.coverAlt)}" loading="lazy" decoding="async"${pixelStyle} />`;
  }

  function openProject(i) {
    const p = SITE.projects[i];
    modalContent.innerHTML = `
      <div class="modal__media">${mediaHTML(p)}</div>
      <h2 id="modal-title">${esc(p.title)}</h2>
      <p class="modal__hook">${esc(p.hook)}</p>
      <dl class="modal__facts">
        <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Duration</dt><dd>${esc(p.duration)}</dd></div>
        <div><dt>Tools</dt><dd>${p.tools.map(esc).join(", ")}</dd></div>
      </dl>
      <p>${esc(p.summary)}</p>
      <h3>What I built &amp; solved</h3>
      <ul class="modal__built">${p.built.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      <div class="modal__actions">
        ${p.playUrl ? `<a class="btn btn--primary" ${ext(p.playUrl)}>▶ Play on itch.io</a>` : ""}
        ${p.codeUrl ? `<a class="btn btn--ghost" ${ext(p.codeUrl)}>View code on GitHub</a>` : ""}
      </div>`;
    lastFocus = document.activeElement;
    dialog.showModal();
    $(".modal__close", dialog).focus();
  }

  projectList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-project]");
    if (btn) openProject(Number(btn.dataset.project));
  });

  /* ---------- Gallery + lightbox ---------- */
  const galleryList = $("#gallery-list");
  galleryList.innerHTML = SITE.gallery
    .map(
      (g, i) => `
      <li class="gallery-item">
        <button type="button" data-art="${i}" aria-haspopup="dialog" aria-label="Enlarge ${esc(g.title)}">
          <img src="${esc(g.src)}" alt="${esc(g.alt)}" width="240" height="240" loading="lazy" decoding="async" />
          <span class="gallery-item__title">${esc(g.title)}</span>
        </button>
      </li>`
    )
    .join("");

  const lightbox = $("#lightbox");
  const lbImg = $("#lightbox-img");
  let artIndex = 0;

  function showArt(i) {
    artIndex = (i + SITE.gallery.length) % SITE.gallery.length;
    const g = SITE.gallery[artIndex];
    lbImg.src = g.src;
    lbImg.alt = g.alt;
    $("#lightbox-caption").innerHTML = `<strong>${esc(g.title)}</strong><span>${esc(g.note || "")}</span>`;
    $("#lightbox-count").textContent = `${artIndex + 1} / ${SITE.gallery.length}`;
  }

  galleryList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-art]");
    if (!btn) return;
    lastFocus = btn;
    showArt(Number(btn.dataset.art));
    lightbox.showModal();
    $("#lightbox-next").focus();
  });
  $("#lightbox-prev").addEventListener("click", () => showArt(artIndex - 1));
  $("#lightbox-next").addEventListener("click", () => showArt(artIndex + 1));
  lightbox.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") showArt(artIndex - 1);
    if (e.key === "ArrowRight") showArt(artIndex + 1);
  });

  /* Shared dialog behaviour: close button, click outside, restore focus, stop videos */
  [dialog, lightbox].forEach((d) => {
    d.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) return d.close();
      // Close only when the click lands on the dark backdrop, outside the box
      const r = d.getBoundingClientRect();
      const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      if (e.target === d && outside) d.close();
    });
    d.addEventListener("close", () => {
      if (d === dialog) modalContent.innerHTML = ""; // stops any playing video/iframe
      if (lastFocus) lastFocus.focus();
    });
  });

  /* ---------- Skills ---------- */
  $("#skills-list").innerHTML = SITE.skills
    .map(
      (s) => `
      <div class="card skill-group">
        <h3><span class="icon" aria-hidden="true">${esc(s.icon)}</span>${esc(s.group)}</h3>
        <ul class="tags">${s.items.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  /* ---------- About ---------- */
  $("#about-bio").innerHTML = SITE.bio.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#about-looking").textContent = SITE.lookingFor;
  const avatar = $("#about-avatar");
  avatar.src = SITE.avatar;
  avatar.alt = SITE.avatarAlt;

  /* ---------- Early work archive ---------- */
  $("#archive-list").innerHTML = SITE.earlyWork
    .map(
      (w) => `
      <li>
        <span class="archive__year">${esc(w.year)}</span>
        <span class="archive__title">${esc(w.title)}</span>
        <span class="archive__note">${esc(w.note)}</span>
        ${w.url ? `<a class="archive__link" ${ext(w.url)}>${esc(w.linkLabel || "Link")} →<span class="visually-hidden"> ${esc(w.title)}</span></a>` : "<span></span>"}
      </li>`
    )
    .join("");

  /* ---------- Contact ---------- */
  const mail = $("#contact-mail");
  mail.href = `mailto:${SITE.email}`;
  mail.textContent = SITE.email;
  $("#cv-link").href = SITE.cvFile;
  $("#social-list").innerHTML = SITE.links
    .map((l) => `<li><a ${ext(l.url)}>${esc(l.label)} <span aria-hidden="true">↗</span></a></li>`)
    .join("");

  const toast = $("#toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }
  $("#copy-email").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      showToast("Email copied!");
    } catch {
      showToast(SITE.email); // clipboard blocked: show it so it can be copied by hand
    }
  });

  /* ---------- Mobile nav ---------- */
  const toggle = $(".nav__toggle");
  const menu = $("#nav-menu");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  /* ---------- Highlight the nav link for the section on screen ---------- */
  // Based on scroll position: the active section is the last one whose top has
  // passed a line 35% down the screen. Nothing is highlighted in the hero, and
  // the last section (Contact) wins once you hit the bottom of the page.
  const navLinks = $$('.nav__menu a[href^="#"]');
  const tracked = navLinks
    .map((a) => ({ link: a, section: $(a.getAttribute("href")) }))
    .filter((t) => t.section);

  function updateActiveLink() {
    const line = window.innerHeight * 0.35;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    let current = null;
    tracked.forEach((t) => {
      if (t.section.getBoundingClientRect().top <= line) current = t;
    });
    if (atBottom && tracked.length) current = tracked[tracked.length - 1];
    tracked.forEach((t) => {
      const active = t === current;
      t.link.classList.toggle("is-active", active);
      if (active) t.link.setAttribute("aria-current", "true");
      else t.link.removeAttribute("aria-current");
    });
  }

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateActiveLink();
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateActiveLink();
})();
