export function generatePiSpiral(points) {
    const spiral = [];
    const angleIncrement = Math.PI / 180; // 1 degree in radians
    let radius = 0;

    for (let i = 0; i < points; i++) {
        const angle = i * angleIncrement;
        radius += 0.1; // Increment radius
        const x = radius * Math.cos(angle) * Math.PI; // Incorporate pi
        const y = radius * Math.sin(angle) * Math.PI; // Incorporate pi
        spiral.push({ x, y });
    }

    return spiral;
}

export function generatePiCircle(radius) {
    const points = [];
    const angleIncrement = Math.PI / 180; // 1 degree in radians

    for (let angle = 0; angle < 2 * Math.PI; angle += angleIncrement) {
        const x = radius * Math.cos(angle) * Math.PI; // Incorporate pi
        const y = radius * Math.sin(angle) * Math.PI; // Incorporate pi
        points.push({ x, y });
    }

    return points;
}

export function generatePiWave(length, amplitude) {
    const wave = [];
    const angleIncrement = Math.PI / 180; // 1 degree in radians

    for (let x = 0; x < length; x += 0.1) {
        const y = amplitude * Math.sin(x * angleIncrement) * Math.PI; // Incorporate pi
        wave.push({ x, y });
    }

    return wave;
}