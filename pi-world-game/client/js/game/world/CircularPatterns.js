export function generateCircularPattern(radius, segments) {
    const points = [];
    const angleIncrement = (2 * Math.PI) / segments;

    for (let i = 0; i < segments; i++) {
        const angle = i * angleIncrement;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push({ x, y });
    }

    return points;
}

export function createPiSpiral(turns, pointsPerTurn) {
    const spiralPoints = [];
    const angleIncrement = (2 * Math.PI) / pointsPerTurn;

    for (let i = 0; i < turns * pointsPerTurn; i++) {
        const angle = i * angleIncrement;
        const radius = (i / pointsPerTurn) * Math.PI; // Radius increases with pi
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        spiralPoints.push({ x, y });
    }

    return spiralPoints;
}