# IPMD Microduck Clone

A Next.js clone of the [pollen-robotics/microduck](https://pollen-robotics.com/microduck/) marketing page, rebranded for **IPMD / M** — a 25cm open-source biped robot.

![IPMD site hero](.readme-assets/hero-screenshot.jpg)

## What's here

| Path | What it is |
|---|---|
| `next/` | The deployable Next.js 15 App Router app — the real deliverable. |
| `build/` | The earlier static HTML/CSS/vanilla-JS version, kept for reference/diffing. |
| `artifacts/` | The raw capture used as the source of truth: rendered DOM, stylesheets, full-page screenshot. |
| `NOTES.md` | Provenance notes, scope decisions, and what's intentionally unverified. |

## Running it

```bash
cd next
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Notes

- `next/public/m-viewer.html` is tracked via [Git LFS](https://git-lfs.com) (it's a large embedded 3D/video asset) — run `git lfs pull` after cloning if it doesn't show up.
- See [`NOTES.md`](NOTES.md) for what was hand-ported vs. carried over verbatim from the captured CSS, and for the one deliberately deferred piece (the live 3D viewer canvas, currently a static placeholder in `components/DuckViewer.tsx`).
