import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../../../common/models/Product.model";
import {ProductService} from "../../../../common/services/product.service";
import {Router} from "@angular/router";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-psu',
  templateUrl: './psu.component.html',
  styleUrls: ['./psu.component.css']
})
export class PSUComponent {
  router;
  psuForm: any = FormGroup
  createdProduct?: Product
  mainparams?: any
  @Input()
  set mainparam(mainparams: any | undefined) {
    if (mainparams) {
      this.mainparams = mainparams;
    }
  }
  constructor(router: Router,private service: ProductService,private toastService: ToastService) {
    this.router = router
    this.psuForm = new FormGroup({
        plugNumber: new FormControl(),
        wattage: new FormControl(),
        modular: new FormControl(),
        pinNumber: new FormControl()
    })

  }
  addProduct(){
    const params = new Map<String, String>([
      ["Number of plugs", this.psuForm.controls.plugNumber.value],
      ["Wattage", this.psuForm.controls.wattage.value],
      ["Modular", this.yesNo()],
      ["Number of pins", this.psuForm.controls.pinNumber.value]
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
    console.log(this.createdProduct)
    setTimeout(()=>{
      this.router.navigateByUrl("/")
    }, 200);
  }
  yesNo():String{
    if(this.psuForm.controls.modular.value == true){
      return "Yes"
    }else{
      return "No"
    }
  }

}
