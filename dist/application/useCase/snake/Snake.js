export class Snake {
    props;
    keyPress;
    name;
    width;
    height;
    position;
    speed;
    gravity;
    constructor(props) {
        this.props = props;
        this.name = props.name;
        this.width = props.width;
        this.height = props.height;
        this.speed = props.speed;
        this.position = props.position;
        this.gravity = props.gravity;
        this.keyPress = {
            right: true,
            left: false,
            down: false,
            up: false,
        };
    }
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(itens) {
        if (this.keyPress.right) {
            this.position.x += this.speed.x;
        }
        if (this.keyPress.left) {
            this.position.x -= this.speed.x;
        }
        if (this.keyPress.down) {
            this.position.y += this.speed.x;
        }
        if (this.keyPress.up) {
            this.position.y -= this.speed.x;
        }
        this.moveDelimitation();
        for (const item of itens) {
            this.collidingWithTheApple(item);
        }
    }
    commands() {
        addEventListener("keydown", ({ key }) => {
            switch (key) {
                case "ArrowRight":
                    this.keyPress.right = true;
                    this.keyPress.left = false;
                    this.keyPress.down = false;
                    this.keyPress.up = false;
                    break;
                case "ArrowLeft":
                    this.keyPress.right = false;
                    this.keyPress.left = true;
                    this.keyPress.down = false;
                    this.keyPress.up = false;
                    break;
                case "ArrowUp":
                    this.keyPress.right = false;
                    this.keyPress.left = false;
                    this.keyPress.down = false;
                    this.keyPress.up = true;
                    break;
                case "ArrowDown":
                    this.keyPress.right = false;
                    this.keyPress.left = false;
                    this.keyPress.down = true;
                    this.keyPress.up = false;
                    break;
            }
        });
    }
    moveDelimitation() {
        if (this.position.x < 0) {
            this.position.x = 500 - this.width;
        }
        if (this.position.x > 500 - this.width) {
            this.props.position.x = 0;
        }
        if (this.position.y < 0) {
            this.position.y = 500 - this.height;
        }
        if (this.position.y > 500 - this.height) {
            this.position.y = 0;
        }
    }
    collidingWithTheApple(apple) {
        if (this.position.x + this.height > apple.position.x &&
            this.position.x < this.height + apple.position.x &&
            this.position.y + this.width > apple.position.y &&
            this.position.y < this.height + apple.position.y) {
            this.position = {
                x: Math.abs(Math.round(Math.random() * 500 + 1 - this.width)),
                y: Math.abs(Math.round(Math.random() * 500 + 1 - this.height))
            };
            apple.width += 20;
        }
    }
}
