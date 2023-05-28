import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../common/models/Product.model";
import {User} from "../common/models/User.model";
import {Cart} from "../common/models/Cart.model";
import {CartService} from "../common/services/cart.service";
import {Router} from "@angular/router";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  router;
  totalPrice: number = 0.00;
  products?: Product[]
  user?: User
  cart?: Cart;
  checkoutForm: any = FormGroup

  constructor(router: Router,private service: CartService,private toastService: ToastService) {
    this.checkoutForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    })
    this.router = router
    let products = sessionStorage.getItem("products")
    if(products) {
      this.products = JSON.parse(products) as Array<Product>
    }
    let user = sessionStorage.getItem("user")
    if(user) {
      this.user = JSON.parse(user) as User
    }
    this.totalPrice = this.sumPrice()
    if(this.products){
      return
    }else{
      this.toastService.error('Your cart is empty!');
        setTimeout(()=>{
          this.router.navigateByUrl("/")
        }, 200);
    }
  }
  deliver(){
    if(this.products)
    if(this.user){
      this.cart={
        email: this.user.email,
        name: this.user.firstName + " " + this.user.lastName,
        address: this.user.address + ", " + this.user.city,
        products: this.products,
        finalPrice: this.sumPrice(),
        time: this.time()
      }
    }else{
      this.cart={
        products: this.products,
        finalPrice: this.sumPrice(),
        time: this.time(),
        email: this.checkoutForm.controls.email.value,
        name: this.checkoutForm.controls.firstName.value + " " + this.checkoutForm.controls.lastName.value,
        address: this.checkoutForm.controls.address.value + ", " + this.checkoutForm.controls.city.value
      }
    }
    if(this.cart){
      this.service.createCart(this.cart).subscribe(product => {
        this.toastService.success('Order submitted!');
        setTimeout(()=>{
          setTimeout(()=>{
            this.service.sendEmail({
              recipient: this.cart!.email,
              msgBody: "Thank you for your purchase!",
              subject: "TWM Electronic Order - " + this.cart!.time
            }).subscribe()
          }, 200);
          this.router.navigateByUrl("/")
        }, 200);
      },error => {
        this.toastService.error('Something went wrong!');
      })
    }
  }
  sumPrice():number{
    let totalPrice = 0.00
    if(this.products)
    for(let i = 0; i < this.products.length;i++){
      totalPrice += this.products[i].price;
    }
    return totalPrice
  }

  popProductFromCart(i: number){
    if(this.products)
    this.products.splice(i, 1);
    this.totalPrice = this.sumPrice()
    sessionStorage.setItem("products",JSON.stringify(this.products));
  }

  time():String{
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: month is zero-based
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return (day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds)
  }
}
