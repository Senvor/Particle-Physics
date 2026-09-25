
const G = 35;
const SCALE = 0.08;
const SOFTENING = 12;

const RESTITUTION = 0.9;
const WALL_RESTITUTION = 0.85;

const FIXED_DT = 1 / 120;
const MAX_STEPS = 8;

const PARTICLE_COUNT = 100;

let particles = [];
let accumulator = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const mass = random(2000, 12000);
    const radius = Math.sqrt(mass / PI) * SCALE;

    const x = random(radius, width - radius);
    const y = random(radius, height - radius);

    particles.push(new Particle(x, y, mass));
  }
}

function simulate(dt) {
  for (const particle of particles) {
    particle.acceleration.set(0, 0);
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      particles[i].physics(particles[j]);
    }
  }

  for (const particle of particles) {
    particle.integrate(dt);
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      particles[i].collide(particles[j]);
    }
  }

  for (const particle of particles) {
    particle.handleWalls();
  }
}

function draw() {
  background(25);

  accumulator += Math.min(deltaTime / 1000, 0.05);

  let steps = 0;

  while (accumulator >= FIXED_DT && steps < MAX_STEPS) {
    simulate(FIXED_DT);
    accumulator -= FIXED_DT;
    steps++;
  }

  for (const particle of particles) {
    particle.draw();
  }
}

// Automatically resize the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Keep particles inside the resized canvas
  for (const particle of particles) {
    particle.handleWalls();
  }
}