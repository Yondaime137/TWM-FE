import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {AngularToastifyModule, ToastService} from 'angular-toastify';
import { MainPageComponent } from './mainPage/page/mainPage.component';
import { CategoriesComponent } from './mainPage/categories/categories.component';
import { CartComponent } from './mainPage/cart/cart.component';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { DetailComponent } from './detail/detail.component';
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
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
