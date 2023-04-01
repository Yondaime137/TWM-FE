import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css']
})
export class MainPageComponent {

  vysun(){
    document.getElementsByClassName("categories")[0].classList.toggle("categoriestranslation")
    document.getElementsByClassName("cart")[0].classList.toggle("carttranslation")
  }
}
