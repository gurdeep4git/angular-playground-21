import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/ui/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
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
    { label: 'NGRX Signal', href: './ngrx-signal' }
  ];
}
