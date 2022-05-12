import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { AppQuery, AppStore } from './services/states/app.state';
import { ProductsQuery, ProductsStore } from './services/states/products.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [
    AppQuery,
    AppStore,
    ProductsQuery,
    ProductsStore

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
