export class HUD {
    constructor() {
        this.health = 100;
        this.piPower = 0;
        this.score = 0;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);
        this.update();
    }

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawHealth();
        this.drawPiPower();
        this.drawScore();
        requestAnimationFrame(this.update.bind(this));
    }

    drawHealth() {
        this.context.fillStyle = 'red';
        this.context.fillRect(10, 10, this.health * 2, 20);
        this.context.strokeStyle = 'black';
        this.context.strokeRect(10, 10, 200, 20);
        this.context.fillStyle = 'black';
        this.context.fillText(`Health: ${this.health}`, 10, 50);
    }

    drawPiPower() {
        this.context.fillStyle = 'blue';
        this.context.fillText(`Pi Power: ${this.piPower}`, 10, 80);
    }

    drawScore() {
        this.context.fillStyle = 'green';
        this.context.fillText(`Score: ${this.score}`, 10, 110);
    }

    setHealth(value) {
        this.health = value;
    }

    setPiPower(value) {
        this.piPower = value;
    }

    setScore(value) {
        this.score = value;
    }
}