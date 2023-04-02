import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./mainPage/page/mainPage.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
