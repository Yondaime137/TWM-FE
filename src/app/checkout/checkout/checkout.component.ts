import {Component, Input} from '@angular/core';
import {Product} from "../../common/models/Product.model";
import {User} from "../../common/models/User.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cart} from "../../common/models/Cart.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  totalPrice: number = 0.00;

  @Input("Products")
  products: Array<Product>=[]
  user?: User
  cart?: Cart;
  checkoutForm: any = FormGroup

  constructor() {
    this.checkoutForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    })
    let products = sessionStorage.getItem("products")
    if(products) {
      this.products = JSON.parse(products) as Array<Product>
    }
    let user = sessionStorage.getItem("user")
    if(user) {
      this.user = JSON.parse(user) as User
    }
    this.price()
  }
  deliver(){
    this.price()
    if(this.user!=undefined){
      this.cart={
        user: this.user,
        products: this.products,
        finalPrice: this.totalPrice,
        time: new Date().toTimeString()
      }
    }else{
      this.cart={
        user: {
          username: "",
          password: "",
          admin: false,
          firstName: this.checkoutForm.controls.firstName.value,
          lastName: this.checkoutForm.controls.lastName.value,
          number: this.checkoutForm.controls.number.value,
          email: this.checkoutForm.controls.email.value,
          address: this.checkoutForm.controls.address.value,
          city: this.checkoutForm.controls.city.value,
        },
        products: this.products,
        finalPrice: this.totalPrice,
        time: new Date().toTimeString()
      }
    }
    console.log(this.cart)
  }
  price(){
    this.totalPrice = 0
    for(let i = 0; i < this.products.length;i++){
    this.totalPrice += this.products[i].price;
  }}

}
