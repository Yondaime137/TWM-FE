import { Component } from '@angular/core';
import {User} from "../common/models/User.model";
import {UserService} from "../common/services/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  person?: User;
  loginForm: any = FormGroup
  constructor( private service: UserService) {
    this.loginForm = new FormGroup({
      id: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(),
      name: new FormControl(null),
      surname: new FormControl(null),
      email: new FormControl(),
      telNumber: new FormControl(null),
      address: new FormControl(null),
      city: new FormControl(null),
      admin: new FormControl(null)
    })
  }

  checkUser(email: String){
    this.service.getUser(email).subscribe((person: User) => {
      this.person = person;
      if(this.person.email == this.loginForm.email && this.person.password == this.loginForm.password){
        console.log("Login successfull")
        //todo login successfull
      }else {
        console.log("Login unsuccessfull")
      }
      console.log(person)
    })
  }


}
