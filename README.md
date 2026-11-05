# CZP // Recruitment Portal

**The system is broken. You weren't invited here by accident.**

The official recruitment portal for **Core Zion Protocol (CZP)** — a fictional hacktivist organization from *Stole This Game*, a first-person stealth-hacking game in development by **Filiki Eteria Games**.

This website is designed as an extension of the game's universe: part recruitment interface, part development showcase.

**[ENTER THE RECRUITMENT PORTAL](https://filiki-eteria.github.io/czp-recruitment-portal/)**

---

## About Stole This Game

*Stole This Game* is a single-player, first-person stealth-hacking experience built around observation, infiltration, and player-driven problem-solving.

Players take the role of a new recruit of Core Zion Protocol, an underground organization challenging powerful systems through digital and physical infiltration.

The game combines several planned gameplay systems:

- **Reconnaissance & Exploitation** — identify vulnerable devices, research exploits, and compromise security infrastructure.
- **Stealth & Guard AI** — navigate patrols, manage visibility and noise, and avoid detection.
- **Security Subsystems** — manipulate surveillance cameras, doors, and other connected infrastructure.
- **Duel Anchors** — a dedicated system for positioning first-person digital katana encounters.
- **Manual Backdoor** — establish recovery points at designated terminals while preserving meaningful consequences.

The game is designed around handcrafted environments, multiple infiltration approaches, and player mastery rather than traditional character upgrades.

**Development status:** Pre-production / Early development.

*Gameplay systems described above represent the intended design and are not all implemented.*

## The Recruitment Portal

Rather than building a conventional promotional landing page, the goal was to create a website that feels like part of the game itself.

The portal serves three purposes:

**Worldbuilding.** Introduce Core Zion Protocol through its own fictional recruitment interface.

**Game Design Showcase.** Present selected gameplay systems alongside the challenges and reasoning behind their design.

**Development Transparency.** Share milestone progress, location development status, and authentic development logs as the project evolves.

The portal is intentionally lightweight, responsive, and accessible without requiring a frontend framework.

## Technology

| Component | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Interactivity | Vanilla JavaScript |
| Content management | JSON |
| Hosting | GitHub Pages |

No frontend frameworks, build pipelines, or backend services are required.

Content is separated from presentation, allowing development updates without modifying the page structure.

## Project Structure

```text
czp-recruitment-portal/
├── index.html
├── styles.css
├── script.js
├── data/
│   └── content.json
└── assets/
    ├── czp-emblem.png
    └── favicon.png
```

## Development Updates

The portal is maintained alongside the development of *Stole This Game*.

The public content file, `data/content.json`, controls:

- Design case statuses: `DESIGNED`, `PROTOTYPED`, `IMPLEMENTED`.
- Gameplay demonstrations, displayed only when enabled and available.
- Development milestones and their completion states.
- Independent progress tracking for Warehouse, Factory, and Office.
- Development logs documenting actual project progress.
- Links to the project repository and future playable demo.

The portal is intended to evolve with the game rather than present unfinished features as completed work.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Kode-n-Rolla/czp-recruitment-portal.git
cd czp-recruitment-portal
```

Start a local server:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

A local server is recommended because the website loads its content from `data/content.json` using the Fetch API.

## About the Developer

**Filiki Eteria Games** is the independent developer identity behind *Stole This Game*.

The project brings together interests in software engineering, cybersecurity, interactive systems, and game design.

The goal is to build a stealth-hacking experience where understanding the environment matters more than following a predefined solution.

---

**Stole This Game** — In Development  
**Core Zion Protocol** — Fictional Hactivist Organization  
**Filiki Eteria Games** — Independent Game Development Studio

*Observe. Infiltrate. Exploit. Make a difference.*
