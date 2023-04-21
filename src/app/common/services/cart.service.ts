import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Cart} from "../models/Cart.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  private url = 'http://161.97.132.138:8080/cart';

  createCart(cart: Cart): Observable<number>{
    return this.http.post<number>(this.url, cart)
  }

  /*getCartByUser(user: User): {

  }

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(`${this.url}`);
  }

  getCartByType(CartType: String): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.url}/type:${CartType}`)
  }

  createCart(Cart: Cart): Observable<number> {
    return this.http.post<number>(this.url, Cart);
  }

  updateCart(Cart: Cart): Observable<Cart> {
    return this.http.put<Cart>
    (`${this.url}/${Cart.id}`, Cart);
  }

  deleteCart(CartId: number): Observable<void> {
    return this.http.delete<void>
    (`${this.url}/${CartId}`);
  }
}*/
}
