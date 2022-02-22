export class Canvas {
    canvas;
    ctx;
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.canvas.style.background = "black";
        this.ctx = this.canvas.getContext("2d");
    }
    draw(gameObject) {
        const { width, height, position } = gameObject;
        this.ctx.fillRect(position.x, position.y, width, height);
    }
    update() {
        throw new Error("Method not implemented.");
    }
    start() {
        throw new Error("Method not implemented.");
    }
    finish() {
        throw new Error("Method not implemented.");
    }
}
