import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepies',
  imports: [],
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.scss',
})
export class RecepiesComponent implements OnInit {
  constructor(private http: HttpClient) {}

  /*
    AUTH INTERCEPTOR ADDED TO ALTER THE REQ HEADERS
    GLOBAL INTERCEPTOR IS ADDED FOR LOADER
    ERROR HANDLING INTERCEPTOR
    
    whenever an api is called, the loader will show and hide automatically
  */
  ngOnInit(): void {
    this.http.get(`https://dummyjson.com/recipes`).subscribe({
      next: (response) => {
        console.log('🚀 ~ RecepiesComponent ~ ngOnInit ~ response:', response);
      },
    });
  }
}
