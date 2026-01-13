import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.scss',
})
export class SignalsDemoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  
  products = signal<Product[]>([]);

  grandTotal = computed(() => {
    let sum = 0;
    this.filteredProducts().forEach((i) => {
      sum = sum + i.totalPrice();
    });
    return sum.toFixed(2);
  });

  searchTerm = signal('');
  minRating = signal(0);

  filteredProducts = computed(() => {
    return this.products().filter((i) =>
      i.title.toLowerCase().includes(this.searchTerm().toLowerCase()) &&
      i.rating >= this.minRating()
    );
  });

  ngOnInit(): void {
    this.route.data
      .subscribe({
        next: (response: any) => {
          const productsSignal = response.products.products.map((i: Product) => {
            const qty = signal(1);
            return {
              ...i,
              quantity: qty,
              totalPrice: computed(() => i.price * qty()),
            };
          });

          this.products.set(productsSignal);
        },
      });
  }

  onQuantityChange(product: Product, e: Event) {
    const value = Number((e.target as HTMLSelectElement).value);
    product.quantity.set(value);
  }

  onRatingChange(e: Event) {
    const value = Number((e.target as HTMLSelectElement).value);
    this.minRating.set(value);
  }

  updateSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }
}
