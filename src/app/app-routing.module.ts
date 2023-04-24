import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./mainPage/page/mainPage.component";
import {RegisterComponent} from "./mainPage/userPage/register/register.component";
import {LoginComponent} from "./mainPage/userPage/login/login.component";
import {CheckoutComponent} from "./mainPage/checkout/checkout/checkout.component";
import {DetailComponent} from "./mainPage/detail/detail.component";
import {
  ProductCreationPageComponent
} from "./mainPage/product-creation/product-creation-page/product-creation-page.component";
import {EditProductComponent} from "./mainPage/edit-product/edit-product.component";
import {EditUserComponent} from "./mainPage/userPage/edit-user/edit-user.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'edituser',
    component: EditUserComponent
  },
  {
    path: 'editproduct',
    component: EditProductComponent,
    children:[
      {
        path:'**',
        component: EditProductComponent,
      }
    ]
  },
  {
    path: 'addproduct',
    component: ProductCreationPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'detail',
    component: DetailComponent,
    children:[
      {
        path:'**',
        component: DetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
