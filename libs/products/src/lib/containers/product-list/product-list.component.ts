import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@sample-pro/data-models';

@Component({
  selector: 'sample-pro-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products!: Product[];
  @Output() filter = new EventEmitter<string>();

  onFilter(category: string) {
    this.filter.emit(category);
  }
}
