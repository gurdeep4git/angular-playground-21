import { CvaComponent } from './components/cva/cva.component';
import { CustomComponentComponent } from './components/custom-component/custom-component.component';
import { productsResolver } from './resolvers/products.resolver';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cva',
    component: CvaComponent,
    title: 'CVA',
  },
  {
    path: 'custom',
    component: CustomComponentComponent,
    title: 'custom',
  },
  {
    path: 'ngTemplateOutlet',
    loadComponent: () =>
      import('./components/template-outlet/template-outlet.component').then(
        (i) => i.TemplateOutletComponent
      ),
    title: 'NgTemplateOutlet',
  },
  {
    path: 'child-routing',
    loadChildren: () =>
      import('./components/child-routing/child-routes').then(
        (i) => i.CHILD_ROUTES
      ),
    title: 'Child-Routing',
  },
  {
    path: 'signals-demo',
    loadComponent: () =>
      import('./components/signals-demo/signals-demo.component').then(
        (i) => i.SignalsDemoComponent
      ),
    title: 'Signals Demo',
    resolve: {
      products: productsResolver,
    },
  },
  {
    path: 'signals-with-apis',
    loadComponent: () =>
      import(
        './components/signals-crud-with-apis/signals-crud-with-apis.component'
      ).then((i) => i.SignalsCrudWithApisComponent),
    title: 'Signals With Apis',
  },
  {
    path: 'model-signal',
    loadComponent: () =>
      import('./components/model-signal/model-signal.component').then(
        (i) => i.ModelSignalComponent
      ),
    title: 'Model Signal',
  },
  {
    path: 'ngrx-signal',
    loadChildren: () =>
      import('./components/ngrx-signal/ngx-signal.route').then(
        (i) => i.CHILD_ROUTES
      ),
    title: 'NGRX Signal',
  },
  {
    path: 'signal-forms',
    loadComponent: () =>
      import('./components/signal-forms/signal-forms.component').then(
        (i) => i.SignalFormsComponent
      ),
    title: 'Signal Forms',
  },
  {
    path: 'reactive-forms',
    loadComponent: () =>
      import('./components/reactive-form/reactive-form.component').then(
        (i) => i.ReactiveFormComponent
      ),
    title: 'Invalid Field Directive',
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import('./components//quiz/quiz.component').then(
        (i) => i.QuizComponent
      ),
    title: 'Quiz',
  },
  {
    path: 'recepies',
    loadComponent: () =>
      import('./components/recepies/recepies.component').then(
        (i) => i.RecepiesComponent
      ),
    title: 'Recepies',
  },
];
