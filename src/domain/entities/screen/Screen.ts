import { ICharacter } from "../character/Character"
import { IItem } from "../item/Item"

export interface IScreen extends IPropsScreen {
    draw():void
    update():void
    keyPress(): void
    start(): void
    finish():void
}

export type IPropsScreen = {
    width: number,
    height: number,
    renderObjects: {
        item: IItem[]
        character: ICharacter[]
    }
}