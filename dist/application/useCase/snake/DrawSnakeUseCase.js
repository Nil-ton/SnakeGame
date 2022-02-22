export class DrawSnakeUseCase {
    ctx;
    gameObject;
    constructor(ctx, gameObject) {
        this.ctx = ctx;
        this.gameObject = gameObject;
    }
    execute() {
        const { width: w, height: h, position: { x, y } } = this.gameObject.props;
        this.ctx.fillRect(x, y, w, h);
    }
}
