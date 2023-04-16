import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../common/models/Product.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  product: Product =
    {
      id: "0",
      name: "Harddisk",
      type: "hardisk",
      count: 12,
      price: 70.20,
      description: "Toto je Harddisk"
    }
  router;
  constructor(router: Router) {
    this.router = router
  }

}
