import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pizza} from "./pizza-card/pizza-model";

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionService {

  constructor(private http:HttpClient)
  {

  }



}
