class WorldGenerator {
    constructor() {
        this.world = [];
    }

    generateWorld(size) {
        for (let x = 0; x < size; x++) {
            this.world[x] = [];
            for (let y = 0; y < size; y++) {
                this.world[x][y] = this.generateTile(x, y);
            }
        }
    }

    generateTile(x, y) {
        const piValue = Math.PI;
        const radius = this.calculateRadius(x, y, piValue);
        return {
            type: this.determineTileType(radius),
            position: { x, y },
            radius: radius
        };
    }

    calculateRadius(x, y, pi) {
        return Math.sin((x + y) * pi / 180) * 10 + 10; // Example calculation using pi
    }

    determineTileType(radius) {
        if (radius < 5) {
            return 'water';
        } else if (radius < 10) {
            return 'land';
        } else {
            return 'mountain';
        }
    }

    getWorld() {
        return this.world;
    }
}

export default WorldGenerator;