import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {AngularToastifyModule, ToastService} from 'angular-toastify';
import { MainPageComponent } from './mainPage/page/mainPage.component';
import { CategoriesComponent } from './mainPage/categories/categories.component';
import { CartComponent } from './mainPage/cart/cart.component';
import {RegisterComponent} from "./mainPage/userPage/register/register.component";
import {LoginComponent} from "./mainPage/userPage/login/login.component";
import { CheckoutComponent } from './mainPage/checkout/checkout/checkout.component';
import { DetailComponent } from './mainPage/detail/detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GeneralParamsComponent } from './mainPage/product-creation/generalParams/generalParams.component';
import { PSUComponent } from './mainPage/product-creation/product-specific-params/psu/psu.component';
import { ProductCreationPageComponent } from './mainPage/product-creation/product-creation-page/product-creation-page.component';
import { ProductSpecificParamsComponent } from './mainPage/product-creation/product-specific-params/product-specific-params.component';
import { MotherboardComponent } from './mainPage/product-creation/product-specific-params/motherboard/motherboard.component';
import { NicComponent } from './mainPage/product-creation/product-specific-params/nic/nic.component';
import { ProcessorComponent } from './mainPage/product-creation/product-specific-params/processor/processor.component';
import { DiscComponent } from './mainPage/product-creation/product-specific-params/disc/disc.component';
import { EditProductComponent } from './mainPage/edit-product/edit-product.component';
import { EditUserComponent } from './mainPage/userPage/edit-user/edit-user.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoriesComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    DetailComponent,
    GeneralParamsComponent,
    PSUComponent,
    ProductCreationPageComponent,
    ProductSpecificParamsComponent,
    MotherboardComponent,
    NicComponent,
    ProcessorComponent,
    DiscComponent,
    EditProductComponent,
    EditUserComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    RouterOutlet,
    ReactiveFormsModule,
    AngularToastifyModule
  ],
  providers: [ToastService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
