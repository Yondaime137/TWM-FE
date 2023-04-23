import {Component, Input} from '@angular/core';
import {Product} from "../common/models/Product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  router;
  constructor(router:Router) {
    this.router = router
  }
  totalPrice: number = 0.00;

  @Input("Products")
  products: Array<Product>=[]

  @Input()
  set productList(products: Product[] | undefined) {
    if(products){
      this.products = products;
    }
  }

  redirect(){
    sessionStorage.setItem("products",JSON.stringify(this.products))
    this.router.navigateByUrl("/checkout")
  }

  popProductFromCart(product: number){
    this.products.splice(product, 1);
  }

  priceCount(){
    this.totalPrice = 0.00
    for(let i = 0; i < this.products.length;i++){
      this.totalPrice += this.products[i].price;
    }
  }

}
