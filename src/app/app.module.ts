import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AngularToastifyModule, ToastService} from 'angular-toastify';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
// import { ConnectorComponent } from './connector/connector.component';
import { NavbarComponent } from './connector/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { NavLeftComponent } from './connector/navbar/nav-left/nav-left.component';
import { NavMidComponent } from './connector/navbar/nav-mid/nav-mid.component';
import { NavRightComponent } from './connector/navbar/nav-right/nav-right.component';
import { ProductListComponent } from './connector/product-list/product-list.component';
import { ProductComponent } from './connector/product-list/product/product.component';
import { CategoriesComponent } from './connector/categories/categories.component';
import {FormsModule} from "@angular/forms";
import { CartComponent } from './connector/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    // ConnectorComponent,
    NavbarComponent,
    NavLeftComponent,
    NavMidComponent,
    NavRightComponent,
    ProductListComponent,
    ProductComponent,
    CategoriesComponent,
    CartComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [ToastService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
