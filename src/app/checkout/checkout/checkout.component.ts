import {Component, Input} from '@angular/core';
import {Product} from "../../common/models/Product.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  totalPrice: number = 0.00;

  @Input("Products")
  products: Array<Product>=[]

  constructor() {
    for(let i = 0; i < this.products.length;i++){
      this.totalPrice += this.products[i].price;
    }
  }

}
