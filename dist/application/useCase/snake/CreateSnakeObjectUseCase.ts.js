import { GameObject } from "../../../domain/entities/GameObject";
export class CreateSnakeObjectUseCase {
    props;
    constructor(props) {
        this.props = props;
    }
    execute() {
        return new GameObject(this.props);
    }
}
