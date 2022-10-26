import { Title } from "@angular/platform-browser";

export class Item {
    id: number = 0;
    title: string = "";
    price: number = 0;
    quantity: number = 0;
    completed: boolean = false;

    constructor(title:string = '', price:number = 0, quantity:number = 0, completed:boolean = false) {
        this.title = title,
        this.price = price,
        this.quantity = quantity,
        this.completed = completed
    }
}