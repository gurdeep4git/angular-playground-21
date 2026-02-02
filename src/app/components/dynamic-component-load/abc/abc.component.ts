import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-abc',
  imports: [],
  templateUrl: './abc.component.html',
  styleUrl: './abc.component.scss',
})
export class AbcComponent {
  @Input() name!: string;
  @Output() onClear = new EventEmitter();

  clear() {
    this.onClear.emit();
  }
}
