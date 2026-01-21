import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ProductModel } from '../../models/product-model.model';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, takeUntil, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tapResponse } from '@ngrx/operators';

export type ShopState = {
  products: ProductModel[];
  cart: ProductModel[];
  isLoading: boolean;
};
const initState: ShopState = {
  products: [],
  cart: [],
  isLoading: false,
};

export const shopStore = signalStore(
  withState(initState),
  withComputed((store) => ({
    cartCount: computed(() => {
      return store.cart().length;
    }),
    grandTotal: computed(() => {
      let grandTotal = 0;
      store.cart().forEach((item) => {
        grandTotal = grandTotal + item.price * item.quantity;
      });
      return grandTotal;
    }),
    cartIds:computed(()=>new Set(store.cart().map(i=>i.id)))
  })),
  withMethods((store, http = inject(HttpClient)) => ({
    loadProduct: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return http.get('https://dummyjson.com/products').pipe(
            tapResponse({
              next: (response: any) => {
                patchState(store, {
                  products: response.products,
                  isLoading: false,
                });
              },
              error: (err: any) => {
                console.error(err);
                patchState(store, {
                  isLoading: false,
                });
              },
            })
          );
        })
      )
    ),
    addToCart(product: ProductModel) {
      const index = store.cart().findIndex((i) => i.id === product.id);
      if (index > -1) {
        const updatedCart = [...store.cart()];
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index]?.quantity + 1,
        };
        patchState(store, { cart: updatedCart });
      } else {
        const updatedCart = [...store.cart(), { ...product, quantity: 1 }];
        patchState(store, { cart: updatedCart });
      }
    },
    removeFromCart(product: ProductModel) {
      const updatedCart = store.cart().filter((i) => i.id != product.id);
      patchState(store, { cart: updatedCart });
    }
  })),
  withHooks({
    onInit(store){
        store.loadProduct();
    }
  })
);
