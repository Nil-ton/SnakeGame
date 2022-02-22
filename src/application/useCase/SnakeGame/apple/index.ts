import { IPropsItem } from "../../../../domain/entities/item/Item.js";
import { Apple } from "./Apple.js";

const appleProps:IPropsItem = {
    width: 20,
    height: 20,
    position: {
        x: Math.abs(Math.round(Math.random() * (500 + 1 - 20))),
        y: Math.abs(Math.round(Math.random() * (500 + 1 - 20)))
    },
    name: "apple"
}

export const apple = new Apple(appleProps)