import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { shopStore } from './store';


@Component({
  selector: 'app-ngrx-signal',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './ngrx-signal.component.html',
  styleUrl: './ngrx-signal.component.scss',
  providers:[shopStore]
})
export class NgrxSignalComponent {
  store = inject(shopStore);
}
