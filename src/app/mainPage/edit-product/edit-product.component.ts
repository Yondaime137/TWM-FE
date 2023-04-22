import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../common/services/product.service";
import {Product} from "../../common/models/Product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  router;
  productForm: any = FormGroup;
  product?: Product;
  constructor(router: Router,private service: ProductService) {
    this.productForm = new FormGroup({
      type: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required)
    })
    this.router = router
    const productId = this.router.url.split('/')[2];
    this.service.getProduct(productId).subscribe((product: Product) => {
      this.product = product;
      this.productForm.setValue(this.prepareForm())
    });
  }

  addProduct(){
    if (this.productForm.valid) {
      if (this.product != undefined) {
        this.product.type = this.productForm.controls.type.value;
        this.product.name = this.productForm.controls.name.value;
        this.product.price = this.productForm.controls.price.value;
        this.product.description = this.productForm.controls.description.value;
        this.product.count = this.productForm.controls.count.value;
        this.product.img = this.productForm.controls.img.value;
        this.service.updateProduct(this.product).subscribe();
        setTimeout(() => {
          this.router.navigateByUrl("/")
        }, 200);
      }
    }
  }

  prepareForm(){
    return {
      type: this.product?.type,
      name: this.product?.name,
      price: this.product?.price,
      description: this.product?.description,
      count: this.product?.count,
      img: this.product?.img
    }
  }
}
