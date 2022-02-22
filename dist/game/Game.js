export class Game {
    screen;
    constructor(screen) {
        this.screen = screen;
    }
    finish() { }
    start() {
        this.screen.draw();
        this.screen.update();
    }
}
