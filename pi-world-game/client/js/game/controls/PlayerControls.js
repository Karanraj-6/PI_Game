class PlayerControls {
    constructor(camera, player) {
        this.camera = camera;
        this.player = player;
        this.keys = {};
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        window.addEventListener('keydown', (event) => this.onKeyDown(event));
        window.addEventListener('keyup', (event) => this.onKeyUp(event));
        window.addEventListener('mousemove', (event) => this.onMouseMove(event));
        window.addEventListener('mousedown', (event) => this.onMouseDown(event));
        window.addEventListener('mouseup', (event) => this.onMouseUp(event));
    }

    onKeyDown(event) {
        this.keys[event.code] = true;
    }

    onKeyUp(event) {
        this.keys[event.code] = false;
    }

    onMouseMove(event) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
    }

    onMouseDown(event) {
        // Handle mouse down events (e.g., shooting, interacting)
    }

    onMouseUp(event) {
        // Handle mouse up events
    }

    update(deltaTime) {
        this.handleMovement(deltaTime);
        this.handleMouseLook();
    }

    handleMovement(deltaTime) {
        const speed = 5; // Movement speed
        if (this.keys['KeyW']) {
            this.player.position.z -= speed * deltaTime;
        }
        if (this.keys['KeyS']) {
            this.player.position.z += speed * deltaTime;
        }
        if (this.keys['KeyA']) {
            this.player.position.x -= speed * deltaTime;
        }
        if (this.keys['KeyD']) {
            this.player.position.x += speed * deltaTime;
        }
    }

    handleMouseLook() {
        const sensitivity = 0.1; // Mouse sensitivity
        const deltaX = this.mouse.x - window.innerWidth / 2;
        const deltaY = this.mouse.y - window.innerHeight / 2;

        this.camera.rotation.y -= deltaX * sensitivity;
        this.camera.rotation.x -= deltaY * sensitivity;

        // Reset mouse position to center
        this.mouse.x = window.innerWidth / 2;
        this.mouse.y = window.innerHeight / 2;
    }
}

export default PlayerControls;