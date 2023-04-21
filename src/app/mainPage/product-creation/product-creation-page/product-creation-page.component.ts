import {Component} from '@angular/core';
@Component({
  selector: 'app-product-creation-page',
  templateUrl: './product-creation-page.component.html',
  styleUrls: ['./product-creation-page.component.css']
})
export class ProductCreationPageComponent {
  generalParams?:any
  genParams(genParams:any){
    this.generalParams = genParams;
  }
}
