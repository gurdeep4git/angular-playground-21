import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PhoneCvaComponent } from './phone-cva/phone-cva.component';

@Component({
  selector: 'app-cva',
  standalone: true,
  imports: [PhoneCvaComponent, ReactiveFormsModule],
  templateUrl: './cva.component.html',
  styleUrl: './cva.component.scss',
})
export class CvaComponent implements OnInit {
  myForm!: FormGroup;
  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      phoneNumber: [],
    });
  }

  onSubmit() {
    console.log(
      '🚀 ~ CvaComponent ~ onSubmit ~ this.myForm.value:',
      this.myForm.value
    );
  }
}
