export class Game {
    width;
    height;
    renderObjects;
    canvas;
    ctx;
    characters;
    itens;
    constructor(props) {
        this.width = props.width;
        this.height = props.height;
        this.renderObjects = props.renderObjects;
        this.itens = this.renderObjects.item;
        this.characters = this.renderObjects.character;
        this.canvas = document.querySelector("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.background = "black";
        this.ctx = this.canvas.getContext("2d");
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
    finish() {
        throw new Error("Method not implemented.");
    }
}
