class Particle {
    constructor (x, y, mass) {
        this.position = createVector(x, y)
        this.velocity = createVector(0, 0)
        this.acceleration = createVector(0, 0)
        this.mass = mass
        this.radius = sqrt(mass) * 2
        this.color = color(random(0,255), random(0,255), random(0,255))
    }

    draw() {
        // Draw Particle
    }

    applyForce(force) {
        // Apply force to particle
    }

    physics(particle) {
        // Use particle
    }

    update() {
        // Update particle
    }
}