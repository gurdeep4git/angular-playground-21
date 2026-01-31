import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPasswordValidation } from './confirm-password.validator';
import { userNameExists } from './username-exists.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-custom-validators',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './custom-validators.component.html',
  styleUrl: './custom-validators.component.scss',
})
export class CustomValidatorsComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        userName: ['', [Validators.required], [userNameExists(this.http)]],
        password: [''],
        confirmPassword: [''],
      },
      { validators: confirmPasswordValidation },
    );
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
