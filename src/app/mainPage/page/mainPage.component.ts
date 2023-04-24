import {Component} from '@angular/core';
import {Product} from "../common/models/Product.model";
import {ProductService} from "../common/services/product.service";
import {CartService} from "../common/services/cart.service";

@Component({
  selector: 'app-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {

  constructor(private service: ProductService, cartService: CartService) {
    let products = sessionStorage.getItem("products")
    if (products) {
      this.products = JSON.parse(products) as Array<Product>
    }
  }

  ngOnInit(): void {
    this.GetProducts();
  }


  GetProducts() {
    this.service.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

  additional?: String;

  getProductByAdditional(additional?: String) {
    this.additional = additional
  }

  getProductByType(typ?: String) {
    setTimeout(() => {
      if (typ == undefined) {
        this.service.getProducts().subscribe((products: Array<Product>) => {
          this.cartProducts = products;
        });
      } else {
        console.log(this.additional)
        if (this.additional == undefined) {
          this.service.getProductByType(typ).subscribe((products: Array<Product>) => {
            this.products = products;
          });
        } else {
          this.service.getProductByAdditional(typ, this.additional).subscribe((products: Array<Product>) => {
            this.products = products;
          });
        }
      }
    }, 200);
  }


  products: Array<Product> = [];
  cartProducts: Array<Product> = [];

  addProductToCart(product: Product) {
    this.cartProducts.push(product);
  }

  detail(x: any) {
    alert(x)
  }
}
