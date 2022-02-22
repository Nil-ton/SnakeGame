export class GameObject {
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
    }
    draw() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
}