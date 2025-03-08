class PhysicsEngine {
    constructor(gravity = 9.81) {
        this.gravity = gravity;
        this.objects = [];
    }

    addObject(object) {
        this.objects.push(object);
    }

    update(deltaTime) {
        for (const object of this.objects) {
            this.applyGravity(object, deltaTime);
            this.updatePosition(object, deltaTime);
        }
    }

    applyGravity(object, deltaTime) {
        if (object.isAffectedByGravity) {
            object.velocity.y -= this.gravity * deltaTime;
        }
    }

    updatePosition(object, deltaTime) {
        object.position.x += object.velocity.x * deltaTime;
        object.position.y += object.velocity.y * deltaTime;
        object.position.z += object.velocity.z * deltaTime;

        this.checkBounds(object);
    }

    checkBounds(object) {
        if (object.position.y < 0) {
            object.position.y = 0;
            object.velocity.y = 0;
        }
    }
}

export default PhysicsEngine;