import { Injectable } from '@angular/core';
import { asapScheduler, BehaviorSubject, observeOn } from 'rxjs';

interface ToastModel {
  message: string;
  show: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorToastService {
  private toast = new BehaviorSubject<ToastModel>({ message: '', show: false });
  toast$ = this.toast.asObservable().pipe(observeOn(asapScheduler));

  show(message: string) {
    const model = {
      message,
      show: true,
    };
    this.toast.next(model);
  }

  hide() {
    const model = {
      message: '',
      show: false,
    };
    this.toast.next(model);
  }
}
