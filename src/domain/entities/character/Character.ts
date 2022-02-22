import { IItem } from "../item/Item";

export type IPropsCharacter = {
    name: string
    width: number
    height: number
    position: { x: number, y: number }[]
    speed: { x: number, y: number }
    gravity: number
}

export interface ICharacter extends IPropsCharacter {
    draw(ctx: CanvasRenderingContext2D): void
    update(itens: IItem[]): void
    commands(): void
}
