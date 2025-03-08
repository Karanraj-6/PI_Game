class SocketHandler {
    constructor(server) {
        this.io = require('socket.io')(server);
        this.clients = new Map();
        this.setupSocketEvents();
    }

    setupSocketEvents() {
        this.io.on('connection', (socket) => {
            console.log('A user connected: ' + socket.id);
            this.clients.set(socket.id, socket);

            socket.on('disconnect', () => {
                console.log('User disconnected: ' + socket.id);
                this.clients.delete(socket.id);
            });

            socket.on('chat message', (msg) => {
                this.handleChatMessage(socket, msg);
            });

            socket.on('player action', (actionData) => {
                this.handlePlayerAction(socket, actionData);
            });
        });
    }

    handleChatMessage(socket, msg) {
        console.log('Message from ' + socket.id + ': ' + msg);
        this.io.emit('chat message', { id: socket.id, message: msg });
    }

    handlePlayerAction(socket, actionData) {
        console.log('Action from ' + socket.id + ': ', actionData);
        this.io.emit('player action', { id: socket.id, action: actionData });
    }
}

module.exports = SocketHandler;