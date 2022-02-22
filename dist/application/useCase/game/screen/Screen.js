export class Screen {
    gameObjects;
    constructor(gameObjects) {
        this.gameObjects = gameObjects;
    }
    draw(ctx) {
        for (let gameObject of this.gameObjects) {
            gameObject.draw(ctx);
        }
    }
    update() {
        for (let gameObject of this.gameObjects) {
            gameObject.update();
        }
    }
}
