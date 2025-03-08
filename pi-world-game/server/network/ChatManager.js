class ChatManager {
    constructor(io) {
        this.io = io;
        this.rooms = {};
    }

    joinRoom(socket, room) {
        socket.join(room);
        if (!this.rooms[room]) {
            this.rooms[room] = [];
        }
        this.rooms[room].push(socket.id);
        this.notifyUsers(room);
    }

    leaveRoom(socket, room) {
        socket.leave(room);
        if (this.rooms[room]) {
            this.rooms[room] = this.rooms[room].filter(id => id !== socket.id);
            this.notifyUsers(room);
        }
    }

    sendMessage(socket, room, message) {
        this.io.to(room).emit('chatMessage', {
            id: socket.id,
            message: message,
            timestamp: new Date()
        });
    }

    notifyUsers(room) {
        const userCount = this.rooms[room] ? this.rooms[room].length : 0;
        this.io.to(room).emit('userCountUpdate', userCount);
    }
}

export default ChatManager;