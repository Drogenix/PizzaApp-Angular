import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {FormBuilder, Validators} from "@angular/forms";
import {DbOrder} from "./dbOrder-model";
import {HttpClient} from "@angular/common/http";
import {tick} from "@angular/core/testing";
import { Router } from '@angular/router';
import {timer} from "rxjs";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  //DbOrder - order model in database, that using for storing data.
  orderListComplete: DbOrder[] = [];

  //Create model of order form by using FormBuilder class.
  //Enable validators for all fields, except 'flat num' field.
  orderForm = this.fb.group({
    name: ['', Validators.required],
    phoneNum: ['', Validators.required],
      street: ['', Validators.required],
      homeNum: ['', Validators.required],
      flatNum: [''],
    payment: ['', Validators.required]
  });

  isOrderComplete: boolean;

  constructor(private fb: FormBuilder, private data:DataService, private http:HttpClient, private router:Router) {}

  formSend()
  {
    try {
      this.getFormValues();
      this.http.post<DbOrder[]>('https://localhost:7109/api/orders/add', this.orderListComplete, {observe: 'response'}).subscribe(response =>
      {
        if(response.status == 200)
        {
          //Clear order list, show message, redirect user to home page.
          this.isOrderComplete = true;
          this.data.orderList.splice(0, this.data.orderList.length);
          this.data.totalPrice = 0;

          setTimeout(this.redirect(),2000)
        }
        else
        {
          window.alert("Unknown error. Please, try again.");
          return;
        }
      });
    }
    catch
    {
      window.alert("Unknown error. Please, try again.");
    }
  }
  redirect():TimerHandler
  {
    return ()=> {this.router.navigateByUrl('');};
  }

  getFormValues()
  {
    //There we get form values by using FormGroup method 'get'.
    const Name = this.orderForm.get('name')?.value;
    const phoneNum = this.orderForm.get('phoneNum')?.value;
    const street = this.orderForm.get('street')?.value;
    const homeNum = this.orderForm.get('homeNum')?.value;
    const flatNum = this.orderForm.get('flatNum')?.value;
    const payKind = this.orderForm.get('payment')?.value;

    //Creating array of our order pizzas.
    for(let orderItem of this.data.orderList)
    {
      const _order = new DbOrder(orderItem.pizza);

      _order.name = Name;
      _order.phoneNum = phoneNum;
      _order.street = street;
      _order.homeNum = homeNum;
      _order.flatNum = flatNum;
      _order.payKind = payKind;
      _order.amount = orderItem.amount;
      _order.totalPrice = orderItem.amount*orderItem.pizza.price;

      this.orderListComplete.push(_order);
    }

  }


  ngOnInit(): void {
    this.isOrderComplete = false;
  }

}
