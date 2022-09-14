import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {OrderComponent} from "../order/order.component";
import {PizzaCardComponent} from "../pizza-card/pizza-card.component";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
      path:'order', component:OrderComponent},
      {
        path: '', component:PizzaCardComponent}
    ]),
    CommonModule
  ],
  exports:[RouterModule],
  bootstrap:[PizzaCardComponent, OrderComponent]
})
export class AppRoutingModule { }
