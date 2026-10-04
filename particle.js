    class Particle {
        constructor (x, y, mass) {
            this.position = createVector(x, y)
            this.velocity = createVector(random(-1, 1), random(-1, 1))
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
            direction.normalize()
            let strength = G * (this.mass * particle.mass) / (distance * distance + 1)
            direction.mult(strength)
            this.applyForce(direction)
        }

        update() {
            let dt = deltaTime / 1000
            console.log(dt, this.acceleration.mag(), this.velocity.mag())
            this.velocity = this.velocity.add(this.acceleration.copy().mult(dt))
            this.position = this.position.add(this.velocity.copy().mult(dt))
            this.acceleration.set(0, 0)
        }
    }