<div align="center">

# Particle Physics

**A tiny universe where everything pulls on everything.**

A gravity sandbox in the browser: 100 particles pull on each other and form little chaotic solar systems.

![Hackatime](https://hackatime.hackclub.com/api/v1/badge/U0B4TE3MN1G/Senvor/Particle-Physics)

Live Preview: https://particlephysics.senvor.dev/

<img src="images/preview.png" alt="Particle Physics running in the browser" width="800" />

</div>

---

## What is it?

Every particle acts like a planet. Each one pulls on every other one with gravity, based on its mass and how far away it is, so they orbit, slingshot and crash into clumps. They sit way closer together than real planets so you don't have to wait a year to see an orbit.

You can drop a big heavy gold particle anywhere with a click and watch everything around it get pulled in, toggle trails to see the orbit paths, pause, or respawn the whole thing.

It started from the Hack Club [Particle Physics workshop](https://workshops.hackclub.com/particle_physics/), then I added my own stuff on top: the clickable heavy particle, trails, pause, respawn, random sizes with better spawn spacing, and a small HUD.

## Features

- **Real gravity between every pair** of particles, using mass and distance
- **Starts spinning**: particles spawn in a ring around the center with a push sideways, so they orbit instead of just falling in
- **Random sizes**: each particle gets a random mass, and bigger mass means a bigger circle
- **Better spawn spacing**, so particles don't start on top of each other
- **Heavy gold particle** dropped wherever you click
- **Trails** that show the orbit paths
- **Pause and respawn** whenever you want
- **HUD** with the controls, particle count and FPS

<div align="center">
  <img src="images/closeup.png" alt="Close up of the particles with trails" width="800" />
  <br/>
  <i>A close up with trails on.</i>
</div>

## Controls

- **Click** - drop a big heavy gold particle
- **R** - respawn all particles
- **T** - turn trails on/off
- **Space** - pause

## Getting Started

### Dependencies

- Any modern browser (Chrome, Firefox, Edge, Safari)
- [p5.js](https://p5js.org/) v1.9.4, loaded from a CDN so nothing to install
- Optional: a local server like VS Code Live Server or Python

### Installing

```
git clone https://github.com/Senvor/Particle-Physics.git
cd Particle-Physics
```

No build step and no packages needed.

### Running it

- Easiest: open the live preview at https://particlephysics.senvor.dev/
- Or run it locally:
  1. Start a local server in the folder
  2. Open the address it prints in your browser

```
python -m http.server 8000
```

Then go to http://localhost:8000

## Help

- Blank page? Open it through a local server or the live link instead of double clicking `index.html`, and check your internet since p5.js loads from a CDN.
- Running slow? Press **R** to respawn, or turn trails off with **T**.
- Particles all clumped in one spot? That's gravity doing its thing. Press **R** to start fresh.

## Tech Stack

- **p5.js** - drawing and vectors
- **JavaScript** - the physics and particle logic
- **HTML + CSS** - the page and the HUD box
- **GitHub Pages** - hosting

## Project Structure

```
Particle-Physics/
├── index.html    # the page and the HUD
├── style.css     # HUD styling
├── particle.js   # the Particle class: gravity, movement, drawing
├── sketch.js     # spawning, the main loop and controls
├── images/       # README screenshots
├── CNAME         # custom domain for GitHub Pages
└── LICENSE
```

## What I Learned

- Using vectors for position, velocity and acceleration
- Newton's law of gravity in code, and softening it so close particles don't explode
- Using delta time so the speed doesn't depend on frame rate
- Giving particles a starting spin so they actually orbit

## AI Usage

AI helped with parts of this project (some of the sim fixes and README wording). I reviewed, tested and tweaked everything myself.

## License

This project is licensed under the [MIT License](LICENSE). You're free to use, modify, and share it, as long as the original copyright notice is kept.
