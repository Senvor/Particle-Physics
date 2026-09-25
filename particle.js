class Particle {
  constructor(x, y, mass) {
    this.position = createVector(x, y);
    this.velocity = createVector(
      random(-35, 35),
      random(-35, 35)
    );
    this.acceleration = createVector(0, 0);

    this.mass = mass;
    this.radius = Math.sqrt(mass / PI) * SCALE;

    this.color = color(
      random(80, 255),
      random(80, 255),
      random(80, 255)
    );
  }

  draw() {
    noStroke();
    fill(this.color);
    circle(
      this.position.x,
      this.position.y,
      this.radius * 2
    );
  }

  applyForce(force) {
    // Newton's second law: a = F / m
    this.acceleration.add(
      p5.Vector.div(force, this.mass)
    );
  }

  physics(other) {
    // Direction from this particle to the other
    const delta = p5.Vector.sub(
      other.position,
      this.position
    );

    const distanceSq = delta.magSq();

    // Avoid an undefined direction at zero distance
    if (distanceSq < 0.000001) return;

    // Softened Newtonian gravity
    const softenedSq =
      distanceSq + SOFTENING * SOFTENING;

    const forceMagnitude =
      G * this.mass * other.mass / softenedSq;

    const force = delta.normalize().mult(
      forceMagnitude
    );

    // Newton's third law
    this.applyForce(force);
    other.applyForce(force.copy().mult(-1));
  }

  integrate(dt) {
    this.velocity.add(
      this.acceleration.copy().mult(dt)
    );

    this.position.add(
      this.velocity.copy().mult(dt)
    );

    this.acceleration.set(0, 0);
  }

  collide(other) {
    const delta = p5.Vector.sub(
      other.position,
      this.position
    );

    let distance = delta.mag();
    const minDistance = this.radius + other.radius;

    if (distance >= minDistance) return;

    // Collision normal
    let normal;

    if (distance < 0.000001) {
      normal = createVector(1, 0);
      distance = 0;
    } else {
      normal = delta.div(distance);
    }

    const invMassA = 1 / this.mass;
    const invMassB = 1 / other.mass;
    const totalInvMass = invMassA + invMassB;

    // Separate overlapping particles
    const penetration = minDistance - distance;

    const correction = normal.copy().mult(
      penetration / totalInvMass
    );

    this.position.sub(
      correction.copy().mult(invMassA)
    );

    other.position.add(
      correction.copy().mult(invMassB)
    );

    // Relative velocity
    const relativeVelocity = p5.Vector.sub(
      other.velocity,
      this.velocity
    );

    const velocityAlongNormal =
      relativeVelocity.dot(normal);

    // Do not apply an impulse if moving apart
    if (velocityAlongNormal >= 0) return;

    // Collision impulse
    const impulseMagnitude =
      -(1 + RESTITUTION) *
      velocityAlongNormal /
      totalInvMass;

    const impulse = normal.copy().mult(
      impulseMagnitude
    );

    this.velocity.sub(
      impulse.copy().mult(invMassA)
    );

    other.velocity.add(
      impulse.copy().mult(invMassB)
    );
  }

  handleWalls() {
    const r = this.radius;

    if (this.position.x < r) {
      this.position.x = r;
      if (this.velocity.x < 0) {
        this.velocity.x *= -WALL_RESTITUTION;
      }
    }

    if (this.position.x > width - r) {
      this.position.x = width - r;
      if (this.velocity.x > 0) {
        this.velocity.x *= -WALL_RESTITUTION;
      }
    }

    if (this.position.y < r) {
      this.position.y = r;
      if (this.velocity.y < 0) {
        this.velocity.y *= -WALL_RESTITUTION;
      }
    }

    if (this.position.y > height - r) {
      this.position.y = height - r;
      if (this.velocity.y > 0) {
        this.velocity.y *= -WALL_RESTITUTION;
      }
    }
  }
}