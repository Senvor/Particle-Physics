class Particle {
    constructor(x, y, mass) {
        this.position = createVector(x, y)
        this.velocity = createVector(0, 0)
        this.acceleration = createVector(0, 0)
        this.mass = mass
        this.radius = sqrt(mass) * 2
        this.color = color(random(80, 255), random(80, 255), random(80, 255))
    }

    draw() {
        noStroke()
        fill(this.color)
        circle(this.position.x, this.position.y, this.radius * 2)
    }

    applyForce(force) {
        // a = F / m (copy so the caller's vector isn't changed)
        this.acceleration.add(p5.Vector.div(force, this.mass))
    }

    physics(particle) {
        let direction = p5.Vector.sub(particle.position, this.position)
        // softening keeps close encounters from exploding to infinity
        let distSq = direction.magSq() + SOFTENING * SOFTENING
        direction.normalize()
        let strength = G * (this.mass * particle.mass) / distSq
        this.applyForce(direction.mult(strength))
    }

    update(dt) {
        this.velocity.add(p5.Vector.mult(this.acceleration, dt))
        this.position.add(p5.Vector.mult(this.velocity, dt))
        this.acceleration.set(0, 0)
    }
}
