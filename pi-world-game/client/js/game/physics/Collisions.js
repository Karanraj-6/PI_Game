export function detectCollision(entityA, entityB) {
    const aBox = entityA.getBoundingBox();
    const bBox = entityB.getBoundingBox();

    return (
        aBox.min.x < bBox.max.x &&
        aBox.max.x > bBox.min.x &&
        aBox.min.y < bBox.max.y &&
        aBox.max.y > bBox.min.y &&
        aBox.min.z < bBox.max.z &&
        aBox.max.z > bBox.min.z
    );
}

export function resolveCollision(entityA, entityB) {
    const collisionNormal = new THREE.Vector3();
    const penetrationDepth = calculatePenetrationDepth(entityA, entityB, collisionNormal);

    if (penetrationDepth > 0) {
        entityA.position.add(collisionNormal.clone().multiplyScalar(penetrationDepth / 2));
        entityB.position.add(collisionNormal.clone().multiplyScalar(-penetrationDepth / 2));
    }
}

function calculatePenetrationDepth(entityA, entityB, collisionNormal) {
    const aBox = entityA.getBoundingBox();
    const bBox = entityB.getBoundingBox();

    const overlapX = Math.min(aBox.max.x - bBox.min.x, bBox.max.x - aBox.min.x);
    const overlapY = Math.min(aBox.max.y - bBox.min.y, bBox.max.y - aBox.min.y);
    const overlapZ = Math.min(aBox.max.z - bBox.min.z, bBox.max.z - aBox.min.z);

    if (overlapX < overlapY && overlapX < overlapZ) {
        collisionNormal.set(overlapX > 0 ? 1 : -1, 0, 0);
        return overlapX;
    } else if (overlapY < overlapZ) {
        collisionNormal.set(0, overlapY > 0 ? 1 : -1, 0);
        return overlapY;
    } else {
        collisionNormal.set(0, 0, overlapZ > 0 ? 1 : -1);
        return overlapZ;
    }
}