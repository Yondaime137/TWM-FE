import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TWM Electronics';
  router;
  constructor(router: Router) {
    this.router = router
  }

  hideIcons(){
    document.getElementsByClassName('cartIcon')[0].classList.add("invisible");
    document.getElementsByClassName('burgerIcon')[0].classList.add("invisible");
    document.getElementsByClassName('cartIcon')[1].classList.add("invisible");
    document.getElementsByClassName('burgerIcon')[1].classList.add("invisible");
  }

  showIcons(){
    document.getElementsByClassName('cartIcon')[0].classList.remove("invisible");
    document.getElementsByClassName('burgerIcon')[0].classList.remove("invisible");
    document.getElementsByClassName('cartIcon')[1].classList.add("invisible");
    document.getElementsByClassName('burgerIcon')[1].classList.add("invisible");
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
}


