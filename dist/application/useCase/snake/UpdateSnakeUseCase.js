export class UpdateSnakeUseCase {
    draw;
    constructor(draw) {
        this.draw = draw;
    }
    execute() {
        this.draw.execute();
    }
}
