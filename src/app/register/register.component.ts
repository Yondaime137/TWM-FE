import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../common/services/user.service";
import {User} from "../common/models/User.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  registerForm: any = FormGroup

  constructor( private service: UserService) {

    this.registerForm = new FormGroup({
      id: new FormControl(null),
      username: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl(),
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      telNumber: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      admin: new FormControl(null)
    })
  }

  registerUser(){
    if(this.registerForm.controls.password.value == this.registerForm.controls.replace.value){
      this.service.createUser(this.prepareUser()).subscribe(person => {
        console.log(person);
      })
    }
  }

  prepareUser(){
    return {
      username: this.registerForm.controls.username.value,
      password: this.registerForm.controls.password.value,
      name: this.registerForm.controls.name.value,
      surname: this.registerForm.controls.surname.value,
      email: this.registerForm.controls.email.value,
      telNumber: this.registerForm.controls.telNumber.value,
      address: this.registerForm.controls.address.value,
      city: this.registerForm.controls.city.value,
      admin: false
    }
  }
}


