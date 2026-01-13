import { Component, signal } from '@angular/core';
import { ChildInputComponent } from './child-input/child-input.component';

@Component({
  selector: 'app-model-signal',
  standalone: true,
  imports: [ChildInputComponent],
  templateUrl: './model-signal.component.html',
  styleUrl: './model-signal.component.scss'
})
export class ModelSignalComponent {
  name = signal('');
}
