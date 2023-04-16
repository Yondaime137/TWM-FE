import { Component } from '@angular/core';
import {Product} from "../../common/models/Product.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  totalPrice: number = 0.00;
  products: Array<Product>=[
    {
      id: "0",
      name: "Harddisk",
      type: "hardisk",
      count: 12,
      price: 70.20,
      description: "Toto je Harddisk"
    },
    {
      id: "1",
      name: "Hardisk",
      type: "hardisk",
      count: 10,
      price: 80.50,
      description: "Toto je Harddisk 2"
    },
    {
      id: "2",
      name: "Ram",
      type: "ram",
      count: 15,
      price: 45.50,
      description: "Toto je Ram"
    }
  ]

  constructor() {
    for(let i = 0; i < this.products.length;i++){
      this.totalPrice += this.products[i].price;
    }
  }

}
