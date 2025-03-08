// This file serves as the entry point for the client-side application, initializing the game and setting up the main loop.

import * as THREE from '../libs/three.min.js';
import { Game } from './game/Game.js';
import { ChatSystem } from './game/ui/ChatSystem.js';
import { UI } from './game/ui/UI.js';
import { HUD } from './game/ui/HUD.js';
import { PlayerControls } from './game/controls/PlayerControls.js';
import { Socket } from './libs/socket.io.js';

let game;
let chatSystem;
let ui;
let hud;
let playerControls;

function init() {
    const canvas = document.getElementById('gameCanvas');
    const socket = Socket.connect('http://localhost:3000');

    game = new Game(canvas, socket);
    chatSystem = new ChatSystem(socket);
    ui = new UI();
    hud = new HUD();

    playerControls = new PlayerControls(game.player);

    setupEventListeners();
    game.start();
}

function setupEventListeners() {
    window.addEventListener('resize', () => {
        game.onWindowResize();
    });

    document.addEventListener('keydown', (event) => {
        playerControls.handleKeyDown(event);
    });

    document.addEventListener('keyup', (event) => {
        playerControls.handleKeyUp(event);
    });

    socket.on('chatMessage', (message) => {
        chatSystem.receiveMessage(message);
    });
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    game.update();
    ui.update();
    hud.update(game.player);
}

init();
gameLoop();