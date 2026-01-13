/*
  TODO:
  1. Add CRUD
  2. Paging
  3. Store filters in LS
*/

import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { ProductModel } from '../models/product-model.model';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';

export interface ProductState {
  data: ProductModel[];
  loading: boolean;
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly FILTERS_KEY = 'FILTERS';
  private URL = `https://dummyjson.com/products`;

  private http = inject(HttpClient);
  private localStorage = inject(LocalStorageService);

  private initalFilters = {
    category: 'all',
    minPrice: 0,
    maxPrice: 2500,
    search: '',
  };

  private state = signal<ProductState>({
    data: [],
    loading: false,
    error: null,
  });

  private filters = signal(this.getFilters());
  public readonly filtersSignal = this.filters.asReadonly();

  private search$ = new Subject<string>();

  constructor() {
    effect(() => {
      this.localStorage.set(this.FILTERS_KEY, this.filters());
    });

    this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query: any) => {
          const url = query
            ? `https://dummyjson.com/products/search?q=${query}`
            : this.URL;
          return this.http.get<any>(url);
        })
      )
      .subscribe({
        next: (response) => {
          this.state.update((s: ProductState) => {
            return {
              ...s,
              loading: false,
              data: response.products,
            };
          });
        },
        error: (error) => {
          this.state.update((s: any) => {
            return {
              ...s,
              loading: false,
              error: 'Something went wrong' + error,
            };
          });
        },
      });
  }

  tasks = computed(() => {
    const { category, minPrice, maxPrice } = this.filters();

    return this.state().data.filter((i) => {
      const matchedCategory = category === 'all' || category === i.category;
      const matchMinPrice = i.price >= minPrice && i.price <= maxPrice;
      return matchedCategory && matchMinPrice;
    });
  });

  isLoading = computed(() => this.state().loading);
  isError = computed(() => this.state().error);

  getFilters(): any {
    if (this.localStorage.get(this.FILTERS_KEY)) {
      return this.localStorage.get(this.FILTERS_KEY);
    }
    return this.initalFilters;
  }

  loadProducts(): void {
    if (this.filters().search) {
      this.search$.next(this.filters().search);
    } else {
      this.state.update((s: ProductState) => {
        return {
          ...s,
          loading: true,
        };
      });

      this.http.get<any>(this.URL).subscribe({
        next: (response: any) => {
          this.state.update((s: ProductState) => {
            return {
              ...s,
              loading: false,
              data: response.products,
            };
          });
        },
        error: (error) => {
          this.state.update((s: any) => {
            return {
              ...s,
              loading: false,
              error: 'Something went wrong' + error,
            };
          });
        },
      });
    }
  }

  updateFilter(appliedFilter: any) {
    this.filters.update((old) => ({ ...old, ...appliedFilter }));
    if (appliedFilter.search !== undefined) {
      this.search$.next(appliedFilter.search);
    }
  }

  clearStorage(): void{
    this.localStorage.clear();
    this.updateFilter(this.initalFilters);
  }
}
