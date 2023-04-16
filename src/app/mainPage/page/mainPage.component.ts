import {Component, Output} from '@angular/core';
import {Product} from "../../common/models/Product.model";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {

  constructor(private http: HttpClient) {
    this.getProducts();
  }
  @Output("Products")
  products: Array<Product> = [];

  getProducts(): void {
    this.http.get<Product[]>('http://localhost:8080/products').subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  detail(x: any){
    alert(x)
  }
}
