export class Screen {
    gameObjects;
    canvas;
    constructor(gameObjects, canvas) {
        this.gameObjects = gameObjects;
        this.canvas = canvas;
    }
    draw() {
        for (let gameObject of this.gameObjects) {
            gameObject.draw(this.canvas.ctx);
        }
    }
    update() {
        for (let gameObject of this.gameObjects) {
            gameObject.update();
        }
    }
}
