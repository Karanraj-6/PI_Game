class Player extends Entity {
    constructor(name, position) {
        super(position);
        this.name = name;
        this.health = 100;
        this.speed = 5;
        this.isAlive = true;
        this.piPower = 0;
    }

    move(direction) {
        if (!this.isAlive) return;

        switch (direction) {
            case 'forward':
                this.position.z -= this.speed;
                break;
            case 'backward':
                this.position.z += this.speed;
                break;
            case 'left':
                this.position.x -= this.speed;
                break;
            case 'right':
                this.position.x += this.speed;
                break;
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.isAlive = false;
            this.health = 0;
        }
    }

    heal(amount) {
        if (this.isAlive) {
            this.health += amount;
            if (this.health > 100) {
                this.health = 100;
            }
        }
    }

    usePiPower() {
        if (this.piPower > 0) {
            // Implement pi power effect
            this.piPower--;
        }
    }

    chat(message) {
        // Implement chat functionality
    }

    update() {
        // Update player state, animations, etc.
    }
}

export default Player;