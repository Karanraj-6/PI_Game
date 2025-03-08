class Entity {
    constructor(name, position, rotation, scale) {
        this.name = name;
        this.position = position || { x: 0, y: 0, z: 0 };
        this.rotation = rotation || { x: 0, y: 0, z: 0 };
        this.scale = scale || { x: 1, y: 1, z: 1 };
        this.isActive = true;
    }

    update(deltaTime) {
        // Update entity logic, to be overridden by subclasses
    }

    render() {
        // Render entity, to be overridden by subclasses
    }

    setPosition(x, y, z) {
        this.position = { x, y, z };
    }

    setRotation(x, y, z) {
        this.rotation = { x, y, z };
    }

    setScale(x, y, z) {
        this.scale = { x, y, z };
    }

    deactivate() {
        this.isActive = false;
    }

    activate() {
        this.isActive = true;
    }
}

export default Entity;