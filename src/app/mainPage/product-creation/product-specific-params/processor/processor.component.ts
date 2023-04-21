import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../../../common/models/Product.model";
import {ProductService} from "../../../../common/services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-processor',
  templateUrl: './processor.component.html',
  styleUrls: ['./processor.component.css']
})
export class ProcessorComponent {
  router;
  processorForm: any = FormGroup
  createdProduct?: Product
  mainparams?: any
  @Input()
  set mainparam(mainparams: any | undefined) {
    if (mainparams) {
      this.mainparams = mainparams;
    }
  }
  constructor(router: Router,private service: ProductService) {
    this.router = router
    this.processorForm = new FormGroup({
      series: new FormControl(),
      cores: new FormControl(),
      threads: new FormControl(),
      socket: new FormControl()
    })

  }
  addProduct(){
    const params = new Map<string, string>([
      ["Series", this.processorForm.controls.series.value],
      ["Number of cores", this.processorForm.controls.cores.value],
      ["Number of threads", this.processorForm.controls.threads.value],
      ["Socket type", this.processorForm.controls.socket.value]
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
    setTimeout(()=>{
      this.router.navigateByUrl("/")
    }, 200);
  }

}
