import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pizza} from "./pizza-model";
import {DataService} from "../data.service";

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {

  pizzaList: Pizza[];

  constructor(private http:HttpClient, private data:DataService) { }

  getData()
  {
    this.http.get<Pizza[]>('https://localhost:7109/api/pizza/').subscribe(data=> this.pizzaList = data);

  }
  addToOrder(pizza: Pizza)
  {
      this.data.addPizza(pizza);
  }

  ngOnInit(): void {
    this.getData();
  }

}
