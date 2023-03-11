import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ProductActions from './product.actions';

import { catchError, of, map, mergeMap, filter } from 'rxjs';
import { Product } from '@sample-pro/data-models';
import { ProductsService } from '../services/products/products.service';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.ProductsActionTypes.LoadProducts),
    mergeMap(() =>
      this.productService.getProducts().pipe(
        map(
          (products: Product[]) =>{
            console.log(products)
            return ProductActions.loadProductsSuccess({ payload: products })
          }
            
        ),
        catchError((error) => of(ProductActions.loadProductsFailure({ error })))
      )
    )
  ));

  loadFilteredProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) =>
      r.payload.routerState.url.startsWith('/products')
    ),
    map(
      (r: RouterNavigationAction) =>
        r.payload.routerState.root.queryParams['category']
    ),
    mergeMap((category: string) =>
      this.productService.getProducts(category).pipe(
        map(
          (products: Product[]) =>
            ProductActions.loadProductsSuccess({ payload: products })
        ),
        catchError((error) => of(ProductActions.loadProductsFailure(error)))
      )
    )
  ));
  
}
