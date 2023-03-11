import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './lib.routes';
import { ProductsComponent } from './containers/products/products.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProduct from './+state/product.reducer';
import { ProductEffects } from './+state/product.effects';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products/products.service';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { MaterialModule } from '@sample-pro/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(productsRoutes),
    StoreModule.forFeature(
      fromProduct.PRODUCT_FEATURE_KEY,
      fromProduct.productsReducer
    ),
    EffectsModule.forFeature([ProductEffects]),
  ],
  declarations: [ProductsComponent, ProductListComponent],
  providers: [ProductsService],
})
export class ProductsModule {}
