export class Screen {
    canvas;
    ctx;
    itens;
    characters;
    constructor(renderObjects) {
        this.canvas = document.querySelector("canvas");
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.canvas.style.background = "black";
        this.ctx = this.canvas.getContext("2d");
        this.itens = renderObjects.item;
        this.characters = renderObjects.character;
        this.keyPress();
    }
    draw() {
        for (const character of this.characters) {
            character.draw(this.ctx);
        }
        for (const item of this.itens) {
            item.draw(this.ctx);
        }
    }
    update() {
        for (const character of this.characters) {
            character.update(this.itens);
        }
    }
    keyPress() {
        for (const character of this.characters) {
            character.commands();
        }
    }
    start() {
        requestAnimationFrame(() => this.start());
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.update();
    }
}
