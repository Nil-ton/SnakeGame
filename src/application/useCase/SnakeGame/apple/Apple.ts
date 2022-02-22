import { IItem, IPropsItem } from "../../../../domain/entities/item/Item"

export class Apple implements IItem {
    name:string
    width:number 
    height: number
    position: {x: number, y:number}
    constructor(props: IPropsItem) { 
        this.name = props.name
        this.width = props.width
        this.height = props.height
        this.position = props.position
    }
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}