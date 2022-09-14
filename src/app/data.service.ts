import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Pizza} from "./pizza-card/pizza-model";
import {Order} from "./busket/order-model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  orderListSource = new Subject<Order[]>();

  orderList: Order[] = [];

  totalPrice: number;

  listToBind = this.orderListSource.asObservable();

  addPizza(pizza:Pizza)
  {
      for(let item of this.orderList)
      {
        if(item.pizza.id == pizza.id)
        {
          return;
        }
      }
      this.orderList.push(new Order(pizza));
      this.orderListSource.next(this.orderList);
  }

  constructor() {

  }
}
