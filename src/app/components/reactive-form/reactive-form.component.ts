import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvalidFieldDirective } from '../../directives/invalid-field.directive';

@Component({
  selector: 'app-reactive-form',
  standalone:true,
  imports: [ReactiveFormsModule,FormsModule, InvalidFieldDirective],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null,Validators.required],
    });
  }

  onSubmit(): void{
    const formInvalid = this.form.invalid;
    if(formInvalid){
      Object.values(this.form.controls).forEach(item=>{
        item.markAsTouched()
        item.updateValueAndValidity()
      })
    }
  }
}
