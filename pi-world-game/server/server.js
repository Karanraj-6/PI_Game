const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const GameServer = require('./game/GameServer');
const ChatManager = require('./network/ChatManager');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const gameServer = new GameServer(io);
const chatManager = new ChatManager(io);

app.use(express.static('client'));

io.on('connection', (socket) => {
    console.log('A player connected:', socket.id);
    
    gameServer.addPlayer(socket);
    chatManager.handleChat(socket);

    socket.on('disconnect', () => {
        console.log('A player disconnected:', socket.id);
        gameServer.removePlayer(socket);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});