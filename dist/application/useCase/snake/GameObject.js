export class Snake {
    props;
    constructor(props) {
        this.props = props;
    }
    draw(ctx) {
        ctx.fillRect(this.props.position.x, this.props.position.y, this.props.width, this.props.height);
    }
    update() {
        this.props.position.x += this.props.speed.x;
        this.props.position.y += this.props.speed.y;
    }
    commands() {
        addEventListener("keydown", ({ key }) => {
            switch (key) {
                case "ArrowRight":
                    this.props.speed.x += 1;
                    break;
            }
        });
    }
}
