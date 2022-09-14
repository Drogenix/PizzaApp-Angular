import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { AppComponent } from './app/app.component';
import {PizzaCardComponent} from "./pizza-card/pizza-card.component";
import {BusketComponent} from "./busket/busket.component";
import {OrderComponent} from "./order/order.component";
import {ApiInteractionService} from "./api-interaction.service";



@NgModule({
  declarations: [

    AppComponent, PizzaCardComponent, BusketComponent, OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService,ApiInteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
