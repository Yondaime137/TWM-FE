import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.css']
})
export class NavRightComponent {
  cart(){
    document.getElementsByClassName("cart")[0].classList.toggle("carttranslation")
    document.getElementsByClassName("cartIcon")[0].classList.toggle("invisible")
    document.getElementsByClassName("cartIcon")[1].classList.toggle("invisible")
  }
}
