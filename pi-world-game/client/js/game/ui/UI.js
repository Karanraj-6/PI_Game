class UI {
    constructor() {
        this.menuVisible = false;
        this.notifications = [];
        this.init();
    }

    init() {
        this.createMenu();
        this.createNotificationArea();
        this.bindEvents();
    }

    createMenu() {
        this.menu = document.createElement('div');
        this.menu.id = 'game-menu';
        this.menu.style.display = 'none';
        this.menu.innerHTML = `
            <h1>Game Menu</h1>
            <button id="resume-button">Resume</button>
            <button id="quit-button">Quit</button>
        `;
        document.body.appendChild(this.menu);
    }

    createNotificationArea() {
        this.notificationArea = document.createElement('div');
        this.notificationArea.id = 'notification-area';
        document.body.appendChild(this.notificationArea);
    }

    bindEvents() {
        document.getElementById('resume-button').addEventListener('click', () => this.toggleMenu());
        document.getElementById('quit-button').addEventListener('click', () => this.quitGame());
    }

    toggleMenu() {
        this.menuVisible = !this.menuVisible;
        this.menu.style.display = this.menuVisible ? 'block' : 'none';
    }

    quitGame() {
        // Logic to quit the game
        console.log('Quitting game...');
    }

    addNotification(message) {
        this.notifications.push(message);
        this.updateNotificationArea();
    }

    updateNotificationArea() {
        this.notificationArea.innerHTML = this.notifications.map(msg => `<p>${msg}</p>`).join('');
    }
}

export default UI;