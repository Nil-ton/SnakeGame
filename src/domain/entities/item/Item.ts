import { ICharacter } from "../character/Character"

export type IPropsItem = {
    name: string
    width: number
    height: number
    position: { x: number, y: number }
}

export interface IItem extends IPropsItem{
    draw(ctx: CanvasRenderingContext2D): void
}