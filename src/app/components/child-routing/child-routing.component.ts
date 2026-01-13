import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child-routing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './child-routing.component.html',
  styleUrl: './child-routing.component.scss'
})
export class ChildRoutingComponent {

}
