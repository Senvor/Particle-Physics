class Particle {
    constructor (x, y, mass) {
        this.position = createVector(x, y)
        this.velocity = createVector(random(-2, 2), random(-2, 2))
        this.acceleration = createVector(0, 0)
        this.mass = mass
        this.radius = sqrt(mass) * 2
        this.color = color(random(0,255), random(0,255), random(0,255))
    }

    draw() {
        noStroke()
        fill(this.color)
        circle(this.position.x, this.position.y, this.radius * 2)
    }

    applyForce(force) {
        this.acceleration = this.acceleration.add(force.div(this.mass))
    }

    physics(particle) {
        let direction = particle.position.copy()
        direction.sub(this.position)
        let distance = direction.mag()
        distance = constrain(distance, 5, 25)
        direction.normalize()
        let strength = (this.mass * particle.mass) / (distance * distance)
        direction.mult(strength)
        this.applyForce(direction)
    }

    update() {
        this.velocity = this.velocity.add(this.acceleration)
        this.position = this.position.add(this.velocity)
    }
}