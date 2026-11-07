const G = 1000          // Gravitational constant
const SOFTENING = 8     // stops infinite forces when particles overlap
const COUNT = 100
let particles = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    spawn()
}

function spawn() {
    particles = []
    let cx = width / 2, cy = height / 2
    let spread = min(width, height) * 0.3
    for (let i = 0; i < COUNT; i++) {
        let angle = random(TWO_PI)
        let r = sqrt(random()) * spread
        let p = new Particle(cx + cos(angle) * r, cy + sin(angle) * r, random(1, 5))
        // give each particle a sideways push so the cloud swirls instead of collapsing
        let speed = sqrt(G * COUNT * 3 / (r + spread * 0.2)) * 0.5
        p.velocity = createVector(-sin(angle), cos(angle)).mult(speed)
        particles.push(p)
    }
}

function draw() {
    background(0)
    // clamp dt so a lag spike or tab switch can't fling everything away
    let dt = min(deltaTime / 1000, 1 / 30)

    // 1) compute every force first, 2) then move everyone
    for (let particle of particles) {
        for (let other of particles) {
            if (particle !== other) particle.physics(other)
        }
    }
    for (let particle of particles) {
        particle.update(dt)
        particle.draw()
    }
}

function mousePressed() {
    spawn()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
