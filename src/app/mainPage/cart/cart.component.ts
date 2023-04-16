import {Component, Input, Output} from '@angular/core';
import {Product} from "../../common/models/Product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  totalPrice: number = 0.00;

  @Input("Products")
  products: Array<Product>=[]

  constructor() {
    for(let i = 0; i < this.products.length;i++){
      this.totalPrice += this.products[i].price;
    }
  }

}
