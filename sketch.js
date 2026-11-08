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
    let tries = 0
    while (particles.length < 100 && tries++ < 5000) {
        let angle = random(TWO_PI)
        let r = random(60, min(width, height) * 0.45)
        let x = width / 2 + cos(angle) * r
        let y = height / 2 + sin(angle) * r

        // skip spots that are too close to another particle
        let tooClose = particles.some(p => dist(x, y, p.position.x, p.position.y) < 30)
        if (tooClose) continue

        let p = new Particle(x, y, random(1, 20))
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
