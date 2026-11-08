# Particle Physics

A gravity sandbox in the browser: hundreds of particles pull on each other and form little chaotic solar systems.

![Hackatime](https://hackatime.hackclub.com/api/v1/badge/U0B4TE3MN1G/Senvor/Particle-Physics)

Live Preview: https://particle-physics.vercel.app/

## Description

Every particle acts like a planet. Each one pulls on every other one with gravity, based on its mass and how far away it is, so they orbit, slingshot and crash into clumps. They sit way closer together than real planets so you don't have to wait a year to see an orbit. You can drop a big heavy gold particle anywhere with a click and watch everything around it get pulled in, toggle trails to see the orbit paths, pause, or respawn the whole thing.

It started from the Hack Club [Particle Physics workshop](https://workshops.hackclub.com/particle_physics/), then I added my own stuff on top: the clickable heavy particle, trails, pause, respawn, random sizes with better spawn spacing, and a small HUD.

### Screenshots

![Preview](images/preview.png)

![Close up of the particles](images/closeup.png)

## Getting Started

### Dependencies

- Any modern browser (Chrome, Firefox, Edge, Safari)
- [p5.js](https://p5js.org/) v1.9.4, loaded from a CDN so nothing to install
- Optional: a local server like VS Code Live Server or Python

### Installing

- Clone the repo

```
git clone https://github.com/Senvor/Particle-Physics.git
cd Particle-Physics
```

- No build step and no packages needed

### Executing program

- Easiest: open the live preview at https://particle-physics.vercel.app/
- Or run it locally:
  1. Start a local server in the folder
  2. Open the address it prints in your browser

```
python -m http.server 8000
```

Then go to http://localhost:8000

### Controls

- **Click** - drop a big heavy gold particle
- **R** - respawn all particles
- **T** - turn trails on/off
- **Space** - pause

## Help

- Blank page? Open it through a local server or the live link instead of double clicking `index.html`, and check your internet since p5.js loads from a CDN.
- Running slow? Press **R** to respawn, or turn trails off with **T**.
- Particles all clumped in one spot? That's gravity doing its thing. Press **R** to start fresh.

## Tech Stack

- **p5.js** - drawing and vectors
- **JavaScript** - the physics and particle logic
- **HTML + CSS** - the page and the HUD box
- **Vercel** - hosting

## AI Usage

AI helped with parts of this project (some of the sim fixes and README wording). I reviewed, tested and tweaked everything myself.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
