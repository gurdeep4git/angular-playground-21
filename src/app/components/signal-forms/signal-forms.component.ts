import { Component, signal } from '@angular/core';
import { init, SubscribeModel, subscribeSchema } from './subscribe.model';
import { Field, form, FormField } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField, FormsModule],
  templateUrl: './signal-forms.component.html',
  styleUrl: './signal-forms.component.scss',
})
export class SignalFormsComponent {
  subscribeModel = signal<SubscribeModel>(init);
  subscribeForm = form(this.subscribeModel, subscribeSchema);

  onSubmit() {
    
    // Guard against invalid submissions
    if (this.subscribeForm().invalid()) {
      console.error('Form is invalid');
      return;
    }

    //To reset
    this.subscribeModel.set(init);
  }
}
