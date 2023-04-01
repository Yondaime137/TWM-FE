import { Component } from '@angular/core';

export function vysun(){
  document.getElementsByClassName("categories")[0].classList.toggle("categoriestranslation")
  document.getElementsByClassName("cart")[0].classList.toggle("carttranslation")
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TWM Electronics';

  vysunSa(){
    vysun()
  }
}


