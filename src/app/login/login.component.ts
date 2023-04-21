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
  loginForm: any = FormGroup
  constructor( private service: UserService) {
    this.service.getUsers().subscribe((users: Array<User>) => {
      this.users = users;
    });

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

  users?: Array<User> = [];
  user?: User;

  checkUser(){
    console.log(this.loginForm.controls.email.value);
    this.service.getUser(this.loginForm.controls.email.value).subscribe((user: User)=>{
      this.user = user
    })
    if(this.user != undefined && this.user.password == this.loginForm.controls.password.value){
      console.log("Úspešne prihlásený")
    }else{
      console.log("Tak ty si mi kokot")
    }
  }
}
