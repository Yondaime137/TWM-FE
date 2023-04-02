import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  ukaz(category: any){
    var categories = document.getElementsByClassName(category);
    for(var i = 0; i < categories.length; i++)
    {
      categories[i].classList.toggle("visible");
    }
  }

  zasun(){
    document.getElementsByClassName("categories")[0].classList.toggle("categoriestranslation");
    document.getElementsByClassName("burgerIcon")[0].classList.toggle("invisible");
  }
}
