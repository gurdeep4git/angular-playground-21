import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { data } from './data';
import { Employee, FormFieldModel } from '../../models/form-field.model';

@Component({
  selector: 'app-dynamic-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  dynamicForm!: FormGroup;
  fields: FormFieldModel[] = data.fields;
  empData: Employee = data.employee;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const group: { [key: string]: FormControl } = {};

    this.fields?.forEach((field) => {
      const validators: any = this.addValidations(field);

      group[field.key] = new FormControl(
        {
          value: this.empData[field.key] ?? null,
          disabled: field.disabled ?? null,
        },
        validators,
      );
    });

    this.dynamicForm = this.fb.group(group);
  }

  private addValidations(field: FormFieldModel) {
    const validators: any = [];
    field.validators?.forEach(
      (v: { name: string; value: any; message: string }) => {
        switch (v.name) {
          case 'required':
            validators.push(Validators.required);
            break;
          case 'minLength':
            validators.push(Validators.minLength(v.value ?? 4));
            break;
        }
      },
    );
    return validators;
  }

  getErrors(field: FormFieldModel): string[] {
    const control = this.dynamicForm.get(field.key);

    if (!control?.errors || !control.touched) {
      return [];
    }

    return (
      field.validators
        ?.filter((v: any) => control.errors?.[v.name.toLowerCase()])
        .map((v: any) => v.message || 'Something is wrong') ?? []
    );
  }
}
