class PlayerManager {
    constructor() {
        this.players = new Map();
    }

    addPlayer(socketId, playerData) {
        this.players.set(socketId, playerData);
    }

    removePlayer(socketId) {
        this.players.delete(socketId);
    }

    getPlayer(socketId) {
        return this.players.get(socketId);
    }

    getAllPlayers() {
        return Array.from(this.players.values());
    }

    updatePlayer(socketId, updatedData) {
        if (this.players.has(socketId)) {
            const player = this.players.get(socketId);
            Object.assign(player, updatedData);
        }
    }

    handlePlayerMovement(socketId, movementData) {
        const player = this.getPlayer(socketId);
        if (player) {
            player.position.x += movementData.x;
            player.position.y += movementData.y;
            player.position.z += movementData.z;
        }
    }
}

export default PlayerManager;