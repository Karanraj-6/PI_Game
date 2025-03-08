export function calculateCircumference(diameter) {
    return Math.PI * diameter;
}

export function calculateArea(radius) {
    return Math.PI * radius * radius;
}

export function calculateVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

export function generatePiPattern(points) {
    const pattern = [];
    for (let i = 0; i < points; i++) {
        const angle = (i / points) * 2 * Math.PI;
        const x = Math.cos(angle) * (Math.PI * i / points);
        const y = Math.sin(angle) * (Math.PI * i / points);
        pattern.push({ x, y });
    }
    return pattern;
}