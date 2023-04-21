import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../../../common/models/Product.model";
import {ProductService} from "../../../../common/services/product.service";
import {Router} from "@angular/router";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent {

  motherboardForm: any = FormGroup
  createdProduct?: Product
  mainparams?: any
  router;
  @Input()
  set mainparam(mainparams: any | undefined) {
    if (mainparams) {
      this.mainparams = mainparams;
    }
  }
  constructor(router: Router,private service: ProductService,private toastService: ToastService) {
    this.router = router
    this.motherboardForm = new FormGroup({
      socket: new FormControl(),
      ports: new FormControl(),
      backlight: new FormControl()
    })

  }
  addProduct(){
    const params = new Map<string, string>([
      ["Socket type", this.motherboardForm.controls.socket.value],
      ["Ports", this.motherboardForm.controls.ports.value],
      ["Is backlit", this.yesNo()]
    ]);
    this.createdProduct = {
      name: this.mainparams.name,
      type: this.mainparams.type,
      count: this.mainparams.count,
      price: this.mainparams.price,
      description: this.mainparams.description,
      img: this.mainparams.img,
      parameters: params
    }
    this.service.createProduct(this.createdProduct).subscribe(product => {
      console.log('Produkt úspešne uložený');
      console.log(product)
    })
    this.toastService.success('Product created!');
    setTimeout(()=>{
      this.router.navigateByUrl("/")
    }, 200);
  }
  yesNo():String{
    if(this.motherboardForm.controls.backlight.value == true){
      return "Yes"
    }else{
      return "No"
    }
  }


}
