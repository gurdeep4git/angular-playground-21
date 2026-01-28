import { Injectable } from '@angular/core';
import { asapScheduler, BehaviorSubject, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private count = 0;
  private loader = new BehaviorSubject<boolean>(false);
  loader$ = this.loader.asObservable().pipe(observeOn(asapScheduler));

  show() {
    this.count++;
    this.loader.next(true);
  }

  hide() {
    this.count--;
    if (this.count <= 0) {
      this.count = 0;
      this.loader.next(false);
    }
  }
}
