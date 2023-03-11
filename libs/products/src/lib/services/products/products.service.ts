import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@sample-pro/data-models';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(category: string | null = null): Observable<Product[]> {
    const url =
      category !== null
        ? `http://localhost:3000/products?category=${category}`
        : `http://localhost:3000/products`;

    return this.httpClient.get<Product[]>(url);
  }
}
