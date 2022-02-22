import { IPropsCharacter } from "../../../../domain/entities/character/Character.js"
import { Snake } from "./Snake.js"

const propsSnake: IPropsCharacter = {
    width: 20,
    height: 20,
    position: [
        { x: 20, y: 20 }
    ],
    speed: {
        x: 1,
        y: 1
    },
    gravity: 0,
    name: "snake"
}


export const snake = new Snake(propsSnake)