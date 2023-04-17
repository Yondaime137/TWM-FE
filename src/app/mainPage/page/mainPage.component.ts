import {Component, Output} from '@angular/core';
import {Product} from "../../common/models/Product.model";
import {ProductService} from "../../common/services/product.service";
import {CartService} from "../../common/services/cart.service";
import {Cart} from "../../common/models/Cart.model";


@Component({
  selector: 'app-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {

  constructor( private service: ProductService, cartService: CartService) {

    cartService.createCart(this.semiCart);
  }

  ngOnInit():void{
    this.GetProducts();
  }

  semiCart!: Cart;


  GetProducts(){
    this.service.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

  products: Array<Product> = [];


  addProductToCart(product: Product){
    console.log(product)
    const products = [];
    products.push(product);
    this.semiCart.products = products;
    console.log(this.semiCart);
  }

  detail(x: any){
    alert(x)
  }
}
