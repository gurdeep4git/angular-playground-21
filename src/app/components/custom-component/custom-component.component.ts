import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-custom-component',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './custom-component.component.html',
  styleUrl: './custom-component.component.scss'
})
export class CustomComponentComponent {

}
