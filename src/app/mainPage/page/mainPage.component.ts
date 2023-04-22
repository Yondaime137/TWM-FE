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
    if(this.semiCart != undefined){
      this.semiCart.products.push(product)
    }else{
      this.semiCart = {
        id : Date.now().toString(),
        user: {
          id: "",
          username:"",
          password:"",
          name:"",
          surname:"",
          email:"",
          telNumber:"",
          address:"",
          city:"",
          admin:false,
        },
        products: [product],
        finalPrice: 0,
        time: 0
      }
    }
    console.log(this.semiCart);


  }




  detail(x: any){
    alert(x)
  }
}
