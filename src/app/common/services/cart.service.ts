import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Cart} from "../models/Cart.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  private url = 'localhost:8080/purchase';

  createCart(cart: Cart): Observable<number>{
    return this.http.post<number>(this.url, cart)
  }
  getPurchasesByEmail(email: String): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.url}/user/${email}`)
  }

  sendEmail(mail: any): Observable<number>{
    return this.http.post<number>(this.url + "/email", mail)
  }
}
