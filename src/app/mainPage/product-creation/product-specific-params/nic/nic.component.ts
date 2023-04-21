import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../../../common/models/Product.model";
import {ProductService} from "../../../../common/services/product.service";
import {Router} from "@angular/router";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-nic',
  templateUrl: './nic.component.html',
  styleUrls: ['./nic.component.css']
})
export class NicComponent {

  nicForm: any = FormGroup
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
    this.nicForm = new FormGroup({
      ports: new FormControl(),
      maxSpeed: new FormControl(),
      opSys: new FormControl()
    })

  }
  addProduct(){
    const params = new Map<string, string>([
      ["Ports", this.nicForm.controls.ports.value],
      ["Max speed", this.nicForm.controls.maxSpeed.value],
      ["Operating system", this.nicForm.controls.opSys.value]
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

}
