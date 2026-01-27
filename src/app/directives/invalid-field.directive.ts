import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { merge, Subscription } from 'rxjs';

@Directive({
  selector: '[appInvalidField]',
  host: {
    '(blur)': 'onBlur()',
  },
})
export class InvalidFieldDirective implements OnInit, OnDestroy {
  subscription!: Subscription | undefined;
  constructor(
    private elRef: ElementRef,
    private render2: Renderer2,
    private ngControl: NgControl,
  ) {}

  ngOnInit(): void {
    if (!this.ngControl) return;

    this.subscription = merge(
      this.ngControl.statusChanges!,
      this.ngControl.valueChanges!,
    ).subscribe(() => {
      this.updateField();
    });
  }

  onBlur() {
    this.updateField();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  updateField() {
    const element = this.elRef.nativeElement;
    const control = this.ngControl?.control;

    if (!control) return;

    const isInvalid = control.invalid && (control.touched || control.dirty);

    isInvalid
      ? this.render2.addClass(element, 'invalid')
      : this.render2.removeClass(element, 'invalid');
  }
}
