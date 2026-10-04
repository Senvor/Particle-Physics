const G = 1; // Gravitational constant
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        let x = random(500,800);
        let y = random(250, 500);
        let mass = random(1, 5);
        particles.push(new Particle(x, y, mass));
    }
}

function draw() {
    background(0);
    for (let particle of particles) {
        for (let other of particles) {
            if (particle !== other) {
                particle.physics(other);
            }
        }
        particle.update();
        particle.draw();
    }
}