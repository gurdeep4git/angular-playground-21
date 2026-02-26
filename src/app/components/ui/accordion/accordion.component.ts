import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  activeIndex = 0;

  accordions = [
    {
      header:'Section 1',
      body:'This is the content of section 1'
    },
    {
      header:'Section 2',
      body:'This is the content of section 2'
    },
    {
      header:'Section 3',
      body:'This is the content of section 3'
    }
  ]
}
