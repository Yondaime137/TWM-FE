import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../common/services/user.service";
import {User} from "../../common/models/User.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  registerForm: any = FormGroup

  constructor( private service: UserService) {

    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      repassword: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    })
  }

  registerUser(){
    if (this.registerForm.valid) {
      if (this.registerForm.controls.password.value == this.registerForm.controls.repassword.value) {
        this.service.createUser(this.prepareUser()).subscribe(person => {
          console.log(person);
        })
      }
    }
  }

  prepareUser():User{
    return {
      username: this.registerForm.controls.username.value,
      password: this.registerForm.controls.password.value,
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
      email: this.registerForm.controls.email.value,
      number: this.registerForm.controls.number.value,
      address: this.registerForm.controls.address.value,
      city: this.registerForm.controls.city.value,
      admin: false
    }
  }
}


