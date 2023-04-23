import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../common/services/user.service";
import {User} from "../../common/models/User.model";
import {Router} from "@angular/router";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  editUserForm: any = FormGroup
  user?:User;
  editedUser?:User;
  router;
  constructor(private service: UserService, router: Router,private toastService: ToastService) {
    this.router = router

    this.editUserForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      admin: new FormControl(null, Validators.required)
    })
    let user = sessionStorage.getItem("user")
    if(user) {
      this.user = JSON.parse(user) as User
    }
    this.editUserForm.setValue(this.user)
  }

  editUser(){
    if (this.editUserForm.valid) {
      if (this.user) {
        this.editedUser = this.prepareUser()
        if (this.editedUser == this.user) {
          this.router.navigate(['/']);
        } else {
          this.service.updateUser(this.editedUser).subscribe(person => {
            sessionStorage.setItem("user", JSON.stringify(this.editedUser));
            console.log(person);
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 200);
          })
        }
      }
    }
  }

  deleteUser(){
    if(this.user)
    if(this.user.id != undefined)
    if (window.confirm('Do you want to delete your account?'))
    this.service.deleteUser(this.user.id).subscribe(() => {
      setTimeout(() => {
        sessionStorage.clear()
        this.toastService.error('Account deleted.');
        setTimeout(() => {
          window.location.replace("/");
        }, 200);
      }, 200);
    })
  }
  prepareUser(): User{
    if(this.user){
      return {
        id: this.user.id,
        username: this.editUserForm.controls.username.value,
        password: this.user.password,
        firstName: this.editUserForm.controls.firstName.value,
        lastName: this.editUserForm.controls.lastName.value,
        email: this.editUserForm.controls.email.value,
        number: this.editUserForm.controls.number.value,
        address: this.editUserForm.controls.address.value,
        city: this.editUserForm.controls.city.value,
        admin: this.user.admin
      }
    }else {
      return {
        id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        address: "",
        city: "",
        admin: false
      }
    }
  }
}
