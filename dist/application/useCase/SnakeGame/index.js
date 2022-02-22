import { Game } from "../../../domain/entities/game/Game.js";
import { apple } from "./apple/index.js";
import { snake } from "./snake/index.js";
const propsScreen = {
    width: 500,
    height: 500,
    renderObjects: {
        item: [apple],
        character: [snake]
    }
};
export const snakeGame = new Game(propsScreen);
