import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./mainPage/page/mainPage.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {CheckoutComponent} from "./checkout/checkout/checkout.component";
import {DetailComponent} from "./detail/detail.component";
import {
  ProductCreationPageComponent
} from "./mainPage/product-creation/product-creation-page/product-creation-page.component";
import {EditProductComponent} from "./mainPage/edit-product/edit-product.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
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
