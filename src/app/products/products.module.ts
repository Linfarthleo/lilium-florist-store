import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    RouterLink
  ]
})
export class ProductsModule { }
