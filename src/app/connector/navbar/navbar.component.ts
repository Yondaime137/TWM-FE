import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  filter?: String
  @Output()
  searchByWord = new EventEmitter<String>();
  filterTerm(word: String){
    this.searchByWord.emit(word)
  }

}
