let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        let mass = random(1, 5);
        particles.push(new Particle(x, y, mass));
    }
}

function draw() {
    background(0);
    for (let particle of particles) {
        particle.update();
        particle.draw();
    }
}