import {Component, EventEmitter,  Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-general-params',
  templateUrl: './generalParams.component.html',
  styleUrls: ['./generalParams.component.css']
})
export class GeneralParamsComponent {
  productForm: any = FormGroup
  @Output()
  genParams = new EventEmitter<any>();
  constructor() {
    this.productForm = new FormGroup({
      type: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      count: new FormControl(),
      image: new FormControl()
    })
  }
  addProduct(): void {
    this.genParams.emit(this.prepareProduct());
  }
  private prepareProduct(){
    return {
      type: this.productForm.controls.type.value,
      name: this.productForm.controls.name.value,
      price: this.productForm.controls.price.value,
      description: this.productForm.controls.description.value,
      count: this.productForm.controls.count.value,
      image: this.productForm.controls.image.value
    };
  }

}
