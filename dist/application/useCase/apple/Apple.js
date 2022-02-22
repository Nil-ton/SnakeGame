export class Apple {
    name;
    width;
    height;
    position;
    constructor(props) {
        this.name = props.name;
        this.width = props.width;
        this.height = props.height;
        this.position = props.position;
    }
    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
