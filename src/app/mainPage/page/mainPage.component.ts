import { Component } from '@angular/core';
import {Product} from "../../common/models/Product.model";


@Component({
  selector: 'app-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {

  products: Array<Product> = [
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
      id: "1",
      name: "Hardisk",
      type: "hardisk",
      count: 10,
      price: 80.50,
      description: "Toto je Harddisk 2"
    },
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
      id: "1",
      name: "Hardisk",
      type: "hardisk",
      count: 10,
      price: 80.50,
      description: "Toto je Harddisk 2"
    }
  ]


  addProduct(){
    const hardDisk = {
      id: "0",
      name: "Harddisk",
      type: "SSD",
      count: 1,
      price: 2.99,
      description: "Toto je Harddisk"
    }
    this.products.push(hardDisk);
  }
}
