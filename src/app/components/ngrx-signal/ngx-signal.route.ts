import { Routes } from '@angular/router';
import { NgrxSignalComponent } from './ngrx-signal.component';

export const CHILD_ROUTES: Routes = [
  {
    path: '',
    component: NgrxSignalComponent,
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./products/products.component').then(
            (i) => i.ProductsComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.component').then((i) => i.CartComponent),
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
    ],
  },
];
