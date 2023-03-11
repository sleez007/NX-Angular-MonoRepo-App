import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsData } from './product.reducer';
import * as fromProduct from './product.reducer';

const getProductsState = createFeatureSelector<ProductsData>('products');

const getProducts = createSelector(
  getProductsState,
  fromProduct.selectAllProducts
);
const getProductEntities = createSelector(
  getProductsState,
  fromProduct.selectProductEntities
);
const getSelectedProductId = createSelector(
  getProductsState,
  fromProduct.getSelectedProductId
);
const getSelectedProduct = createSelector(
  getProductEntities,
  getSelectedProductId,
  (productsDictionary, id) => {
    return productsDictionary[id ?? -1];
  }
);

export const productsQuery = {
  getProducts,
  getProductEntities,
  getSelectedProductId,
  getSelectedProduct,
};