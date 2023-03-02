import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

  _produkty: Array<any> = [["http://www.imgcomfort.com/us/-/media/corporatesite/socialshareimages/img-logo1200x600.jpg", "Nazov"]];

  addProdukt(){
    const imageUrl = document.getElementById("imgURL") as HTMLInputElement;
    const productName = document.getElementById("productName") as HTMLInputElement;
    const kontent: any = [imageUrl.value, productName.value];
    this._produkty.push(kontent);
    console.log("Added: " + imageUrl.value + " & " + productName.value);
  }


  get productName(): string {
    return this._produkty[0][1];
  }

  ngOnInit() {
  }
}
