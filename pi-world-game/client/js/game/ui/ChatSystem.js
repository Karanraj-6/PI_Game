class ChatSystem {
    constructor(socket) {
        this.socket = socket;
        this.messages = [];
        this.chatBox = document.getElementById('chat-box');
        this.inputField = document.getElementById('chat-input');
        this.sendButton = document.getElementById('send-button');

        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        this.socket.on('chatMessage', (msg) => this.receiveMessage(msg));
    }

    sendMessage() {
        const message = this.inputField.value.trim();
        if (message) {
            this.socket.emit('chatMessage', message);
            this.inputField.value = '';
            this.addMessageToChat('You: ' + message);
        }
    }

    receiveMessage(msg) {
        this.addMessageToChat(msg);
    }

    addMessageToChat(msg) {
        this.messages.push(msg);
        const messageElement = document.createElement('div');
        messageElement.textContent = msg;
        this.chatBox.appendChild(messageElement);
        this.chatBox.scrollTop = this.chatBox.scrollHeight; // Auto-scroll to the bottom
    }
}

export default ChatSystem;