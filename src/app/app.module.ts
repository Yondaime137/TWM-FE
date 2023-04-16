import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { MainPageComponent } from './mainPage/page/mainPage.component';
import { CategoriesComponent } from './mainPage/categories/categories.component';
import { CartComponent } from './mainPage/cart/cart.component';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoriesComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    DetailComponent
  ],
    imports: [
        HttpClientModule,
        AppRoutingModule,
        BrowserModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
