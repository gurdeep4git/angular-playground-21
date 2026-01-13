import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { TableComponent } from '../ui/table/table.component';
import { LabelValue } from '../../models/label-value.model';

@Component({
  selector: 'app-signals-crud-with-apis',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './signals-crud-with-apis.component.html',
  styleUrl: './signals-crud-with-apis.component.scss',
})
export class SignalsCrudWithApisComponent implements OnInit {
  productsService = inject(ProductsService);

  headers: LabelValue[] = [
    { label: 'Title', value: 'title' },
    { label: 'Category', value: 'category' },
    { label: 'Price', value: 'price' },
    { label: 'Rating', value: 'rating' },
    { label: 'Stock', value: 'stock' },
    { label: 'Brand', value: 'brand' },
    { label: 'Availability', value: 'availabilityStatus' },
  ];

  ngOnInit(): void {
    this.productsService.loadProducts();
  }

  onCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.productsService.updateFilter({ category: value });
  }

  onMinPriceChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.productsService.updateFilter({ minPrice: value });
  }

  onMaxPriceChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.productsService.updateFilter({ maxPrice: value });
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.productsService.updateFilter({ search: value });
  }

  onClearStorage(){
    this.productsService.clearStorage()
  }
}
