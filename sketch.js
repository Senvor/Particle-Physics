const G = 1000 // Gravitational constant
let particles = []
let trails = true
let paused = false

function setup() {
    createCanvas(windowWidth, windowHeight)
    spawn()
}

function spawn() {
    particles = []
    for (let i = 0; i < 100; i++) {
        let angle = random(TWO_PI)
        let r = random(20, 250)
        let p = new Particle(width / 2 + cos(angle) * r, height / 2 + sin(angle) * r, random(1, 5))
        p.velocity = createVector(-sin(angle), cos(angle)).mult(sqrt(G * 300 / (r + 50)) * 0.5) // spin
        particles.push(p)
    }
}

function draw() {
    background(5, 6, 10, trails ? 40 : 255)
    let dt = min(deltaTime / 1000, 1 / 30)

    if (!paused) {
        for (let particle of particles) {
            for (let other of particles) {
                if (particle !== other) particle.physics(other)
            }
        }
        for (let particle of particles) particle.update(dt)
    }
    for (let particle of particles) particle.draw()

    if (frameCount % 15 == 0) {
        document.getElementById("stats").innerText = particles.length + " particles | " + round(frameRate()) + " fps"
    }
}

function mousePressed() {
    let big = new Particle(mouseX, mouseY, 60)
    big.color = color(255, 212, 121)
    particles.push(big)
}

function keyPressed() {
    if (key == "r") spawn()
    if (key == "t") trails = !trails
    if (key == " ") paused = !paused
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
