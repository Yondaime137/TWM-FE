import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { MainPageComponent } from './mainPage/page/mainPage.component';
import { CategoriesComponent } from './mainPage/categories/categories.component';
import { CartComponent } from './mainPage/cart/cart.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoriesComponent,
    CartComponent,

    LoginComponent,
    RegisterComponent

  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
