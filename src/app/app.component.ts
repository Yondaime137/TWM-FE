import {Component} from '@angular/core';
import {Product} from "./common/models/Product.model";
import {ProductService} from "./common/services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter?:String;
  additional?: String;
  products?: Product[];
  counter:number = 0;

  constructor(private service: ProductService) {
    let products = sessionStorage.getItem("products")
    if (products) {
      this.products = JSON.parse(products) as Array<Product>
    }
  }

  getProductByAdditional(additional?: String) {
    this.additional = additional
  }

  getProductByType(typ?: String) {
    setTimeout(() => {
      if (typ == undefined) {
        this.service.getProducts().subscribe((products: Array<Product>) => {
          this.products = products;
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
  filterTerm(word: any){
    if(word){
      this.filter = word.toString();
    }else{
      this.filter = " "
    }
  }

  refreshCart(){
    this.counter += 1;
  }
}


