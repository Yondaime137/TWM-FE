import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MainPageComponent} from "./main-page/main-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegisterPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
