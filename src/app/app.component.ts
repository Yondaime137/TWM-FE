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
    document.getElementById('cartIcon')!.style.display = "none";
    document.getElementById('burgerIcon')!.style.display = "none";
  }


  vysunSa(x:String){
    if (x == 'cart') {
      document.getElementsByClassName("cart")[0].classList.toggle("carttranslation");
      document.getElementsByClassName("cartIcon")[0].classList.toggle("invisible");
    } else if (x == 'categories') {
      document.getElementsByClassName("categories")[0].classList.toggle("categoriestranslation");
      document.getElementsByClassName("burgerIcon")[0].classList.toggle("invisible");
    }
  }
}


