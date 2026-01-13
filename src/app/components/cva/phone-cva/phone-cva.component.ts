import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutoFocusDirective } from '../../../directives/auto-focus.directive';

@Component({
  selector: 'app-phone-cva',
  standalone: true,
  imports: [AutoFocusDirective],
  templateUrl: './phone-cva.component.html',
  styleUrl: './phone-cva.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneCvaComponent),
      multi: true,
    },
  ],
})
export class PhoneCvaComponent implements ControlValueAccessor {
  phoneNumber: any;
  private onChange!: (value: any) => void;
  private onTouched!: () => void;

  writeValue(value: any): void {
    this.phoneNumber = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public onPhoneNumberChanged(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.phoneNumber = value;
    this.onChange(value);
  }

  public onBlur(): void {
    this.onTouched();
  }
}
