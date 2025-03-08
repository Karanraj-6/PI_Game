class GameServer {
    constructor() {
        this.players = {};
        this.worldState = new WorldState();
        this.chatManager = new ChatManager();
    }

    startServer(port) {
        this.io = require('socket.io')(port);
        this.setupSocketHandlers();
        console.log(`Game server started on port ${port}`);
    }

    setupSocketHandlers() {
        this.io.on('connection', (socket) => {
            console.log('A player connected:', socket.id);
            this.handlePlayerConnection(socket);

            socket.on('disconnect', () => {
                this.handlePlayerDisconnect(socket);
            });

            socket.on('chatMessage', (msg) => {
                this.chatManager.handleChatMessage(socket, msg);
            });

            socket.on('playerAction', (action) => {
                this.handlePlayerAction(socket, action);
            });
        });
    }

    handlePlayerConnection(socket) {
        const player = new Player(socket.id);
        this.players[socket.id] = player;
        socket.emit('worldState', this.worldState);
        this.broadcastPlayerList();
    }

    handlePlayerDisconnect(socket) {
        delete this.players[socket.id];
        this.broadcastPlayerList();
        console.log('A player disconnected:', socket.id);
    }

    handlePlayerAction(socket, action) {
        const player = this.players[socket.id];
        if (player) {
            player.performAction(action);
            this.updateWorldState();
        }
    }

    updateWorldState() {
        this.worldState.update(this.players);
        this.io.emit('worldState', this.worldState);
    }

    broadcastPlayerList() {
        const playerList = Object.keys(this.players).map(id => this.players[id]);
        this.io.emit('playerList', playerList);
    }
}

module.exports = GameServer;