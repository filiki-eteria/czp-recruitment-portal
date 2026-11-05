# CZP Recruitment Portal — Stole This Game

Minimal, static, single-page website for **Stole This Game**, framed as a recruitment portal for **Core Zion Protocol (CZP)**, the fictional hacktivist organization in the game. **Filiki Eteria Games** is the real developer/studio identity.

This version is based on the final supplied `GDD.md` (November 2026). The GDD is the source of truth; the website is a concise public-facing presentation. The private GDD is **not included** in this package.

## Preview locally

From this folder run:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`. Opening `index.html` directly via `file://` may prevent the JSON from loading.

## GitHub Pages

1. Create a repository in the account/organization of your choice.
2. Upload the **contents** of this folder to the repository root.
3. Under **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)`.
4. Use the Pages URL displayed by GitHub.

## Update the site

Edit `data/content.json`:

- `roadmap[].completed`: `true` or `false` (all default to `false` until you confirm the milestone is complete).
- `cases[].status`: `DESIGNED`, `PROTOTYPED`, or `IMPLEMENTED`.
- `cases[].media`: a relative `.webm` or `.mp4` path, e.g. `assets/duel-anchors.webm`; empty means the video placeholder remains. Video has controls and does not autoplay.
- `logs[]`: short public-facing development records. Expandable text lives in `body`.
- `project.demoUrl`: empty = `ACCESS TRAINING` scrolls to Dev Logs. An HTTPS URL makes the button open the demo instead.
- `project.githubUrl`: set to your **verified** GitHub organization/repository URL to show the GitHub footer link. Empty hides the link.

## Assets

- `assets/czp-emblem.png` — the original emblem supplied by the user; not replaced with an internet search result.
- `assets/favicon.png` — small resized derivative of the original emblem.

## Design accuracy

- All four cases are marked `DESIGNED` until their implementation is verified.
- The save mechanic is **Manual Backdoor**, as described in GDD §5.5 and §7.5. The GDD has one older reference to “Automatic Backdoor” in §2; its dedicated system sections and release scope consistently specify Manual Backdoor.
- Guard Hearing is a distance-based movement-noise investigation system, **not** detection from opening doors or complex sound propagation.
- Cameras grant subsystem access; on Normal/Hard the player can use individual temporary `SPOOF FEED`, while on Easy compromised cameras ignore the player for the current attempt.
- The roadmap matches the eight milestones in GDD §8.2–8.9. All 15 authored contracts are included as a milestone and release requirement in GDD §8.8, §8.10 and §8.12.
- No release dates, invented screenshots, Steam page, or claim of implemented gameplay.
- `ACCESS TRAINING` scrolls to Dev Logs until a demo URL is configured.
