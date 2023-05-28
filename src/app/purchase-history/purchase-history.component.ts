import { Component } from '@angular/core';
import {CartService} from "../common/services/cart.service";
import {User} from "../common/models/User.model";
import {Product} from "../common/models/Product.model";
import {Cart} from "../common/models/Cart.model";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent {
  email!:String;
  purchases:Array<Cart> = []
  constructor(private service: CartService,private toastService: ToastService) {
    let user = sessionStorage.getItem("user")
    if (user) {
      let x = JSON.parse(user) as User
      this.email = x.email
    }else{
      window.location.replace("/")
      this.toastService.error("You need to be logged in!")
    }
    this.getPurchases()
  }

  getPurchases(){
    this.service.getPurchasesByEmail(this.email).subscribe((purchases: Array<Cart>) => {
      this.purchases = purchases;
    },(error)=>{
      setTimeout(() => {
        this.toastService.error("Something went wrong!")
        setTimeout(() => {
          window.location.replace("/")
        }, 300);
      }, 200);
    })
  }
}
