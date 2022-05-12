import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductsListComponent]
})
export class ProductsModule { }
