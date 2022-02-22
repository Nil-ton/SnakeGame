import { GameObject } from "../../../../domain/entities/GameObject.js";
export class Snake {
    snakeProps;
    constructor(snakeProps) {
        this.snakeProps = snakeProps;
    }
    static create(props) {
        return new GameObject(props);
    }
    update() {
        this.snakeProps.position.x += this.snakeProps.speed.x;
        this.snakeProps.position.y += this.snakeProps.speed.y;
    }
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.snakeProps.position.x, this.snakeProps.position.y, this.snakeProps.width, this.snakeProps.height);
    }
}
