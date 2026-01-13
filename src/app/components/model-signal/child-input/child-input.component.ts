import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-input.component.html',
  styleUrl: './child-input.component.scss',
})
export class ChildInputComponent {
  inputText = model('');
}
