import {Pizza} from "../pizza-card/pizza-model";
import {Input} from "@angular/core";

export class Order
{
  constructor(pizza:Pizza) {
    this.pizza = pizza;
    this._amount = 1;
  }
  pizza:Pizza;
  private _amount:number;
  get amount(): number
  {
    return this._amount;
  }
  amchange(value: number)
  {
    this._amount+=value;
  }
}
