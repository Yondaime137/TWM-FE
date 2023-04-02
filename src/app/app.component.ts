import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TWM Electronics';

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


