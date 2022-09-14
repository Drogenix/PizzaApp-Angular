import {Pizza} from "../pizza-card/pizza-model";

export class DbOrder
{
  constructor(pizza:Pizza) {
    this.pizzaId= pizza.id;
  }

  orderId: 0;

  pizzaId:number;

  name: string;

  phoneNum:string;

  street: string;

  homeNum: string;

  flatNum?: string;

  payKind: string;

  amount: number;

  totalPrice: number;
}
