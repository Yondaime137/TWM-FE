import {Component, Output} from '@angular/core';
import {Product} from "../../common/models/Product.model";
import {ProductService} from "../../common/services/product.service";


@Component({
  selector: 'app-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {

  constructor( private service: ProductService) {}

  ngOnInit():void{
    this.GetProducts();
  }



  GetProducts(){
    this.service.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

  products: Array<Product> = [];


  detail(x: any){
    alert(x)
  }
}
