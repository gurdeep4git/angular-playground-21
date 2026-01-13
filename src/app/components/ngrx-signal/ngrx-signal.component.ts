import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-ngrx-signal',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './ngrx-signal.component.html',
  styleUrl: './ngrx-signal.component.scss'
})
export class NgrxSignalComponent {

}
