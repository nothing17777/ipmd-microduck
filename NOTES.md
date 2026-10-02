# Microduck clone — provenance & notes

Source: https://pollen-robotics.com/microduck/
Captured: `scripts/fetch-artifacts.mjs` (real Chromium render) → `artifacts/page.html`, `artifacts/css/*` (7 stylesheets, incl. the 144KB Emotion/MUI rule set), `artifacts/screenshot.png` (1440×15767 full page). The user also supplied `images/1.webp` (a duck render) as the static stand-in for the 3D viewer.

## Deliverable

`next/` — a Next.js 15 App Router app, per the user's request for a React/Next setup (this superseded the skill's default plain static-HTML `build/` output, which still exists alongside it for reference/diffing).

- `app/layout.tsx` — metadata + self-hosted fonts via `next/font/google` (DM Sans, Anton — both are Google Fonts; the source loads a self-hosted subset of the same two families, so this is a like-for-like substitution, not an approximation).
- `app/globals.css` — the captured Emotion/MUI ruleset (`artifacts/css/inline-{2,3,0,1,5}.css`, verbatim) + `clone.css`, a semantic layer translating every `.mui-xxxx` rule used on this page into named classes (`.hero-title`, `.step-card`, `.tile`, …), values traced 1:1 to the captured CSS.
- `components/` — one component per section (`Hero`, `Squad`, `FilmSection`, `Sim2Real`, `Tricks`, `Colourway`, `Wild`, `Packs`, `Specs`, `OpenSource`, `Discord`, `FinalCta`, `Footer`, `Header`, `CookieBanner`), each a server component unless it owns interactive state (marked `"use client"`).
- `public/` — every image, video, poster, SVG, and font the page uses, downloaded and localized (26MB under `public/assets/`); zero runtime dependency on pollen-robotics.com.

`next build` passes, `/` prerenders as static (`○`), no console errors — verified by running the dev server in the browser pane and walking the page top to bottom.

## Animations carried over (live in `app/globals.css`)

These were CSS-only on the source page, so they transfer verbatim:
- Marquee ticker drift (`@keyframes microduck-marquee-drift`, renamed `marquee-drift`), looped 3× in `Hero.tsx` for a seamless wrap.
- Sticker bob (`sticker-bob-12`) on the tap-tap/bomb stickers.
- All comic-card hover tilts (`transform: rotate(...)` → `rotate(0)` on `:hover`), button press/hover shadow shifts, tile hover hints.
- The scanline/grain overlays on the hero and the notch/clip-path section transitions.

## Deliberate scope decision: the 3D duck viewer

The source page renders a live three.js scene in `<canvas>` (idle sit/stand loop, head tracks the pointer, click-to-quack; the colourway section reuses the same canvas keyed to the selected swatch/sunburst-tint CSS variable). That's not reconstructable from static HTML/CSS artifacts — flagged `UNVERIFIED` per the skill's own rule against guessing JS-driven behavior.

Per the mid-build request, this is now a known, permanent integration point rather than a gap to "fix": **`components/DuckViewer.tsx`** is a small client component that currently renders the supplied `/images/1.webp` reference image inside the exact `.duck3d-stage` box the real canvas occupied (used by both `Sim2Real.tsx` at `size="large"` and `Colourway.tsx` at `size="small"`). Swap the `<img>` inside it for the EchoSphere 3D model (e.g. an `@react-three/fiber` `<Canvas>`) — the component's sizing, background, and call sites don't need to change.

## Hand-ported behaviors (were inline `<script>`/React state on the source; no raw script re-injected)

- Mobile nav drawer open/close — `Header.tsx` (`useState`).
- Cookie consent banner, persisted via `localStorage` — `CookieBanner.tsx`.
- Launch-film poster → inline `<video controls>` on click — `FilmSection.tsx`.
- Gallery tile click-to-play / click-to-pause + unmute, and the chorale clip's dedicated sound toggle — `Wild.tsx`.
- Colourway swatch selection (visual `aria-pressed` state; wire this into `DuckViewer`'s colour prop once the real model lands) — `Colourway.tsx`.

## Assets

All 55 image/video/SVG assets plus 2 font subsets and the manifest/touch-icon were fetched from the live origin and localized under `next/public/`. Zero failures. The `pack-*.webp?v=2` query strings were dropped (the `?v=2` was a cache-buster, not a different asset).

## Outstanding `UNVERIFIED`

- **3D duck canvas** — see above; intentionally deferred to the EchoSphere integration.
- **Confetti/particle or other possible canvas-driven micro-interactions** the screenshot/HTML didn't surface a static equivalent for (none were visually evident beyond the duck canvas, but a live JS session wasn't used to confirm this exhaustively, per the artifacts-only methodology).
- Exact subset `woff2` files for DM Sans/Anton were not pulled byte-for-byte (substituted with the same two families via `next/font/google`, which self-hosts them at build time) — functionally identical rendering, noted per the skill's font-substitution rule.

## Also present

`build/` — the plain static HTML/CSS/vanilla-JS version produced before the pivot to Next.js; kept as a lower-level reference (e.g. for diffing raw markup) since it shares the same `public/` assets.
