import { ICharacter, IPropsCharacter } from "../../../../domain/entities/character/Character";
import { IItem } from "../../../../domain/entities/item/Item";
import { Apple } from "../apple/Apple";

export class Snake implements ICharacter {
    keyPress: { right: boolean, left: boolean, down: boolean, up: boolean };
    name: string;
    width: number;
    height: number;
    position: { x: number; y: number; }[];
    speed: { x: number; y: number; };
    gravity: number;
    snakeLength: {x: number, y: number}[];

    constructor(public props: IPropsCharacter) {
        this.name = props.name
        this.width = props.width
        this.height = props.height
        this.speed = props.speed
        this.position = props.position
        this.gravity = props.gravity
        this.snakeLength = []
        this.keyPress = {
            right: true,
            left: false,
            down: false,
            up: false,
        }
        console.log( this.position)
        
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "red"
        for(let i = 0; i < this.position.length; i++) {
            ctx.fillRect(this.position[i].x, this.position[i].y, this.width, this.height)
        }
    }

    update(itens: IItem[]): void {
        

        for(const item of itens) {
            this.collidingWithTheApple(item)
        }
        this.walk()
        this.moveDelimitation()
        
    }

    commands() {
        addEventListener("keydown", ({ key }) => {
            switch (key) {
                case "ArrowRight":
                    this.keyPress.right = true
                    this.keyPress.left = false
                    this.keyPress.down = false
                    this.keyPress.up = false
                    break
                case "ArrowLeft":
                    this.keyPress.right = false
                    this.keyPress.left = true
                    this.keyPress.down = false
                    this.keyPress.up = false
                    break
                case "ArrowUp":
                    this.keyPress.right = false
                    this.keyPress.left = false
                    this.keyPress.down = false
                    this.keyPress.up = true
                    break
                case "ArrowDown":
                    this.keyPress.right = false
                    this.keyPress.left = false
                    this.keyPress.down = true
                    this.keyPress.up = false
                    break
            }
        })
    }

    moveDelimitation() {
        if(this.position[0].x < 0) {
            this.position[0].x = 500 - this.width
        }
        if(this.position[0].x > 500 - this.width) {
            this.position[0].x = 0
        }
        if(this.position[0].y < 0) {
            this.position[0].y = 500 - this.height
        }
        if(this.position[0].y > 500 - this.height) {
            this.position[0].y = 0
        }
    }

    collidingWithTheApple(apple: Apple) {
        if (this.position[0].x + this.height > apple.position.x &&
            this.position[0].x < this.height + apple.position.x &&
            this.position[0].y + this.width > apple.position.y &&
            this.position[0].y < this.height + apple.position.y) {
            apple.position = {
                x: Math.abs(Math.round(Math.random() * 500 + 1 - this.width)),
                y: Math.abs(Math.round(Math.random() * 500 + 1 - this.height))
            }

            const snakePositionX = this.position[0].x 
            const snakePositionY = this.position[0].y
    
            const updatePosition = {
                x: snakePositionX,
                y: snakePositionY
            }
            
            this.position.unshift(updatePosition)
            this.addSpeed()
            console.log(this.position)
        }
    }

    walk() {
        
        if (this.keyPress.right) {
            this.position[0].x += this.speed.x
        }

        if (this.keyPress.left) {
            this.position[0].x -= this.speed.x
        }

        if (this.keyPress.down) {
            this.position[0].y += this.speed.x
        }

        if (this.keyPress.up) {
            this.position[0].y -= this.speed.x
        }
        const snakePositionX = this.position[0].x
        const snakePositionY = this.position[0].y
        
        this.position.pop()

        const newHeadSnake = {
            x: snakePositionX,
            y: snakePositionY
        }

        this.position.unshift(newHeadSnake)
    }

    addSpeed() {
        this.speed.x += .1
        this.speed.y += .1
    }
}