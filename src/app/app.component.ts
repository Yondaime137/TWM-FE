import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./mainPage/common/models/User.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TWM Electronics';
  router;
  user?: User;
  constructor(router: Router) {
    let user = sessionStorage.getItem("user")
    if (user) {
      this.user = JSON.parse(user) as User;
    }
    this.router = router
  }

  hideIcons(){
    document.getElementsByClassName('cartIcon')[0].classList.add("invisible");
    document.getElementsByClassName('burgerIcon')[0].classList.add("invisible");
    document.getElementsByClassName('cartIcon')[1].classList.add("invisible");
    document.getElementsByClassName('burgerIcon')[1].classList.add("invisible");
    document.getElementsByClassName('formButton')[0].classList.add("invisible");
    document.getElementsByClassName('user')[0].classList.add("invisible");
    document.getElementsByClassName('center')[0].classList.add("float-r");
  }

  showIcons(){
    document.getElementsByClassName('cartIcon')[0].classList.remove("invisible");
    document.getElementsByClassName('burgerIcon')[0].classList.remove("invisible");
    document.getElementsByClassName('cartIcon')[1].classList.add("invisible");
    document.getElementsByClassName('burgerIcon')[1].classList.add("invisible");
    document.getElementsByClassName('formButton')[0].classList.remove("invisible");
    document.getElementsByClassName('user')[0].classList.remove("invisible");
    document.getElementsByClassName('center')[0].classList.remove("float-r");
  }

  refresh(){
    window.location.replace("/")
  }

  vysunSa(x:String){
    if (x == 'cart') {
      document.getElementsByClassName("cart")[0].classList.toggle("carttranslation");
      document.getElementsByClassName("cartIcon")[0].classList.toggle("invisible");
      document.getElementsByClassName("cartIcon")[1].classList.toggle("invisible");
    } else if (x == 'categories') {
      document.getElementsByClassName("categories")[0].classList.toggle("categoriestranslation");
      document.getElementsByClassName("burgerIcon")[0].classList.toggle("invisible");
      document.getElementsByClassName("burgerIcon")[1].classList.toggle("invisible");
    }
  }

  logOut():void{
    sessionStorage.clear()
    window.location.replace("/")
  }
}


