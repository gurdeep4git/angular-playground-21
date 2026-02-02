import { Component } from '@angular/core';

import { CardComponent } from './components/ui/card/card.component';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { AsyncPipe } from '@angular/common';
import { ErrorToastService } from './services/error-toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground-21';
  topics: { label: string; href: string }[] = [
    { label: 'CVA', href: './cva' },
    { label: 'NgTemplateOutlet', href: './ngTemplateOutlet' },
    { label: 'Child Routing', href: './child-routing' },
    { label: 'Signals', href: './signals-demo' },
    { label: 'Signals With Apis CRUD', href: './signals-with-apis' },
    { label: 'model() Signal', href: './model-signal' },
    { label: 'NGRX Signal', href: './ngrx-signal' },
    { label: 'Signal Forms', href: './signal-forms' },
    { label: 'Invalid Field Directive', href: './reactive-forms' },
    { label: 'Quiz', href: './quiz' },
    { label: 'Recepies', href: './recepies' },
    { label: 'Dynamic Form', href: './dynamic-form' },
    { label: 'Custom Validtion', href: './custom-validation' },
    { label: 'Dynamic Component Load', href: './dynamic-component-load' },
  ];

  constructor(
    private loaderService:LoaderService,
    private errorToastService:ErrorToastService
  ){}
  
  loader$ = this.loaderService.loader$;
  toast$ = this.errorToastService.toast$;
}
