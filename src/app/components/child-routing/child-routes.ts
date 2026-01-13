import { Routes } from '@angular/router';
import { ChildRoutingComponent } from './child-routing.component';

export const CHILD_ROUTES: Routes = [
  {
    path: '',
    component: ChildRoutingComponent,
    children: [
      {
        path: 'component-A',
        loadComponent: () =>
          import('./component-a/component-a.component').then(
            (m) => m.ComponentAComponent
          ),
      },
      {
        path: 'component-B',
        loadComponent: () =>
          import('./component-b/component-b.component').then(
            (m) => m.ComponentBComponent
          ),
      },
      { path: '', redirectTo: 'component-A', pathMatch: 'full' },
    ],
  },
];
