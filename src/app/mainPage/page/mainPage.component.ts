import {Component, EventEmitter, Output} from '@angular/core';
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
  }

  ngOnInit():void{
    this.GetProducts();
  }


  GetProducts(){
    this.service.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

  getProductByType(typ?: String){
    if(typ == undefined){
      this.service.getProducts().subscribe((products: Array<Product>) => {
        this.products = products;
      });
    }else {
      this.service.getProductByType(typ).subscribe((products: Array<Product>) => {
        this.products = products;
      });
    }
  }


  products: Array<Product> = [];
  cartProducts: Array<Product> = [];


  addProductToCart(product: Product){
    this.cartProducts.push(product);
  }



  detail(x: any){
    alert(x)
  }
}
