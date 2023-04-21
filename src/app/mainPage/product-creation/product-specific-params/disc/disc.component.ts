import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../../../common/models/Product.model";
import {ProductService} from "../../../../common/services/product.service";
import {Router} from "@angular/router";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DiscComponent {

  processorForm: any = FormGroup
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
    this.processorForm = new FormGroup({
      discType: new FormControl(),
      capacity: new FormControl(),
      lifetime: new FormControl()
    })

  }
  addProduct(){
    const params = new Map<string, string>([
      ["Type of disc", this.processorForm.controls.discType.value],
      ["Capacity", this.processorForm.controls.capacity.value],
      ["Lifetime", this.processorForm.controls.lifetime.value]
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
