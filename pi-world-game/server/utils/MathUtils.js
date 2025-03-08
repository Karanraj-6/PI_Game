export function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

export function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

export function calculatePiApproximation(iterations) {
    let piApproximation = 0;
    for (let i = 0; i < iterations; i++) {
        piApproximation += (4 * ((i % 2 === 0 ? 1 : -1) / (2 * i + 1)));
    }
    return piApproximation;
}

export function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}