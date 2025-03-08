export function createParticleEffect(position, color, size) {
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = {
            position: { ...position },
            velocity: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2,
                z: (Math.random() - 0.5) * 2,
            },
            color: color,
            size: size,
            life: Math.random() * 2 + 1, // Particle life between 1 and 3 seconds
        };
        particles.push(particle);
    }

    return particles;
}

export function updateParticles(particles, deltaTime) {
    for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.position.x += particle.velocity.x * deltaTime;
        particle.position.y += particle.velocity.y * deltaTime;
        particle.position.z += particle.velocity.z * deltaTime;
        particle.life -= deltaTime;

        if (particle.life <= 0) {
            particles.splice(i, 1); // Remove dead particles
        }
    }
}

export function renderParticles(particles, renderer) {
    particles.forEach(particle => {
        renderer.setColor(particle.color);
        renderer.drawParticle(particle.position, particle.size);
    });
}