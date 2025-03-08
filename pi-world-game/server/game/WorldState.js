class WorldState {
    constructor() {
        this.players = {};
        this.entities = [];
        this.worldData = {};
    }

    addPlayer(playerId, playerData) {
        this.players[playerId] = playerData;
    }

    removePlayer(playerId) {
        delete this.players[playerId];
    }

    updatePlayer(playerId, playerData) {
        if (this.players[playerId]) {
            this.players[playerId] = { ...this.players[playerId], ...playerData };
        }
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    removeEntity(entityId) {
        this.entities = this.entities.filter(entity => entity.id !== entityId);
    }

    updateWorldData(data) {
        this.worldData = { ...this.worldData, ...data };
    }

    getWorldState() {
        return {
            players: this.players,
            entities: this.entities,
            worldData: this.worldData
        };
    }
}

export default WorldState;