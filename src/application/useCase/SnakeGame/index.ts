import { Game } from "../../../domain/entities/game/Game.js";
import { IPropsScreen } from "../../../domain/entities/screen/Screen.js";
import { apple } from "./apple/index.js";
import { snake } from "./snake/index.js";

const propsScreen:IPropsScreen = {
    width: 500,
    height: 500,
    renderObjects: {
        item: [apple],
        character: [snake]
    }
}

export const snakeGame = new Game(propsScreen)