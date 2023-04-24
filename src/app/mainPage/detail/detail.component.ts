import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../common/models/Product.model";
import {ProductService} from "../common/services/product.service";
import {ToastService} from "angular-toastify";
import {User} from "../common/models/User.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  user?:User;
  router;
  constructor(router: Router,private service: ProductService,private toastService: ToastService) {
    this.router = router
    let user = sessionStorage.getItem("user")
    if(user) {
      this.user = JSON.parse(user) as User
    }
  }

  ngOnInit():void{
    const productId = this.router.url.split('/')[2];
    this.service.getProduct(productId).subscribe((product: Product) => {
      this.product = product;
      setTimeout(()=>{
        this.parser();
        }, 200);
    });
  }

  product?: Product;
  parametres?: Array<String>
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


  }

  deleteProduct(id:String | undefined){
    if(id){
      if (window.confirm('Do you want to delete the product?')) {
        this.service.deleteProduct(id).subscribe(() => {
          console.log("Produkt Vymazaný")
        })
        this.toastService.error('Product deleted.');
        setTimeout(()=>{
          this.router.navigateByUrl("/")
        }, 200);
      }
    }
  }


}
