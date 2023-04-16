import {Component, Output} from '@angular/core';
import {Product} from "../../common/models/Product.model";
import {ProductService} from "../../common/services/product.service";



@Component({
  selector: 'app-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {

  constructor( private service: ProductService) {
    service.getProducts();
  }

  @Output("Products")
  products: Array<Product> = [];


  detail(x: any){
    alert(x)
  }
}
