import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../common/services/product.service";
import {Product} from "../common/models/Product.model";
import {User} from "../common/models/User.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  router;
  productEditForm: any = FormGroup;
  product?: Product;
  user?:User
  constructor(router: Router,private service: ProductService) {
    this.router = router
    let user = sessionStorage.getItem("user")
    if (user) {
      this.user = JSON.parse(user) as User;
    }
    if(this.user && this.user.admin){
      return
    }else{
      this.router.navigateByUrl("/")
    }
    this.productEditForm = new FormGroup({
      type: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required)
    })
    const productId = this.router.url.split('/')[2];
    this.service.getProduct(productId).subscribe((product: Product) => {
      this.product = product;
    });
    this.productEditForm.setValue(this.prepareForm())
  }

  editProduct(){
    if (this.productEditForm.valid) {
      if (this.product != undefined) {
        this.product.name = this.productEditForm.controls.name.value;
        this.product.price = this.productEditForm.controls.price.value;
        this.product.description = this.productEditForm.controls.description.value;
        this.product.count = this.productEditForm.controls.count.value;
        this.product.img = this.productEditForm.controls.img.value;
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
