import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
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
  parametres?: Array<String>
  constructor(router: Router,private service: ProductService) {
    this.router = router
    const productId = this.router.url.split('/')[2];
    this.service.getProduct(productId).subscribe((product: Product) => {
      this.product = product;
      setTimeout(()=>{
        this.parser();
      }, 200);
    });
  }

  parser(){
    for (let prop in this.product?.parameters){
      console.log(prop)
    }
    let params = [];
    let param = JSON.stringify(this.product!.parameters).replaceAll('"','').replace("{","").replace("}","").split(",")
    for(let i =0 ; i<param.length; i++){
      params.push(param[i].replace(":",": "))
    }
    this.parametres = params
    console.log(this.parametres)
  }

  addProduct(){
    console.log("asd")
  }
}
