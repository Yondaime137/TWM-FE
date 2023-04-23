import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../common/models/User.model";
@Component({
  selector: 'app-product-creation-page',
  templateUrl: './product-creation-page.component.html',
  styleUrls: ['./product-creation-page.component.css']
})
export class ProductCreationPageComponent {
  router;
  user?: User;
  constructor(router: Router) {
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
  }
  generalParams?:any
  genParams(genParams:any){
    this.generalParams = genParams;
  }
}
