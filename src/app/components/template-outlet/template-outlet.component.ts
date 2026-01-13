import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-template-outlet',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-outlet.component.html',
  styleUrl: './template-outlet.component.scss',
})
export class TemplateOutletComponent {
  countries = [
    { label: 'USA', value: 'usa' },
    { label: 'UK', value: 'uk' },
  ];

  students = [
    { label: 'Kapil', value: '01' },
    { label: 'Sunil', value: '02' },
  ];

  selectedCountry =  this.countries[0].value;
  selectedStudent =  this.students[0].value;

  onCountryChange(e:any){
    console.log(e)
  }

  onStudentChange(e:any){
    console.log(e)
  }

}
