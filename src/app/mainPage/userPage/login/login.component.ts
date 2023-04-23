import {Component, EventEmitter, Output} from '@angular/core';
import {User} from "../../common/models/User.model";
import {UserService} from "../../common/services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any = FormGroup
  router;
  constructor( private service: UserService,private toastService: ToastService, router: Router) {
    this.router = router
    this.loginForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
    })
  }
  user?: User;
  checkUser() {
    if (this.loginForm.valid) {
      this.service.getUser(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe((user: User) => {
        this.user = user
        sessionStorage.setItem("user", JSON.stringify(this.user));
      })
      setTimeout(() => {
        if (this.user != undefined) {
          this.toastService.success('Logged in!');
          setTimeout(() => {
            window.location.replace("/")
          }, 300);
        }
      }, 200);
    }
  }
}
