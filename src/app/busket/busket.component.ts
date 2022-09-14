import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../pizza-card/pizza-model";
import {DataService} from "../data.service";
import {Order} from "./order-model";

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.css']
})
export class BusketComponent implements OnInit {

  totalPrice:number;

  @Input()isDisplay:boolean;

  @Input()isOrderPage:boolean;

  orderList: Order[] = [];

  constructor(private data:DataService) {
    this.dataBind();

  }
  onPlus(order: Order)
  {
    order.amchange(1);
    this.totalPrice = this.totalPrice + order.pizza.price;
  }
  onMinus(order: Order)
  {
    if(order.amount != 1)
    {
      order.amchange(-1);
      this.totalPrice = this.totalPrice - order.pizza.price;
    }
  }
  ngOnInit(): void {
    this.totalPrice = this.data.totalPrice;
    this.orderList = this.data.orderList;
    this.isDisplay = true;
    if(this.orderList.length >0)
    {
      this.isDisplay= false;
    }
  }
  ngOnDestroy()
  {
    this.data.totalPrice = this.totalPrice;
  }
  dataBind()
  {
    this.data.listToBind.subscribe(pizzaList => {
      this.isDisplay = false;
      this.orderList = pizzaList;
      if(this.orderList.length == 1)
      {
        this.totalPrice = this.orderList[0].pizza.price;
      }
      else
      {
        this.totalPrice += this.orderList[this.orderList.length-1].pizza.price;

      }
    });
  }

}
