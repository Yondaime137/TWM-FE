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

  @Input()
  set personData(products: Product[] | undefined) {
    if(products){
      this.products = products;
    }
  }

  constructor() {
    this.priceCount();
  }

  priceCount(){
    for(let i = 0; i < this.products.length;i++){
      this.totalPrice += this.products[i].price;
    }
  }

}
