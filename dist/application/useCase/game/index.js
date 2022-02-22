export class Game {
    screen;
    canvas;
    activeState;
    ctx;
    constructor(screen, canvas) {
        this.screen = screen;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.activeState = this.start;
    }
    start() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.screen.update();
        this.screen.draw(this.ctx);
    }
    finish() { }
}
