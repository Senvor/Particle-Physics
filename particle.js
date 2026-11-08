class Particle {
    constructor (x, y, mass) {
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
        this.acceleration.add(p5.Vector.div(force, this.mass))
    }

    physics(particle) {
        let direction = p5.Vector.sub(particle.position, this.position)
        let distance = direction.magSq() + 64 // +64 so close particles dont explode
        direction.normalize()
        let strength = G * (this.mass * particle.mass) / distance
        this.applyForce(direction.mult(strength))
    }

    update(dt) {
        this.velocity.add(p5.Vector.mult(this.acceleration, dt))
        this.position.add(p5.Vector.mult(this.velocity, dt))
        this.acceleration.set(0, 0)
    }
}
