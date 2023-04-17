import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../common/models/Product.model";
import {ProductService} from "../common/services/product.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  router;
  constructor(router: Router,service: ProductService) {
    this.router = router

    const productId = this.router.url.split('/')[2];

    service.getProduct(productId).subscribe((product: Product) => {
      this.product = product;
    });
  }

  product?: Product;


}
