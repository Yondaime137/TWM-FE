import {Component, EventEmitter, Output} from '@angular/core';

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

  @Output()
  searchByType = new EventEmitter<String>();

  getProductByType(type?:String):void{
    if(type == undefined){
      this.searchByType.emit()
    }else {
      this.searchByType.emit(type)
    }
  }
}
