import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Product } from '@sample-pro/data-models';
import { Observable } from 'rxjs';
import { loadProducts } from '../../+state/product.actions';
import { ProductsState } from '../../+state/product.reducer';
import { productsQuery } from '../../+state/product.selectors';

@Component({
  selector: 'sample-pro-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private store: Store<ProductsState>, private router: Router) {}

  updateUrlFilters(category: string): void {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: { category },
    };
    this.router.navigate([`/products`], navigationExtras);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
    this.products$ = this.store.pipe(select(productsQuery.getProducts));
    this.store.pipe(select(productsQuery.getProducts)).subscribe(
      d => {
        console.log('Mad')
        console.log(d);
        console.log('Crzy')
      }
    )
  }
}
