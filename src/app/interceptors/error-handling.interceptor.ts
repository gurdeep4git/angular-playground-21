import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorToastService } from '../services/error-toast.service';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ErrorToastService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
        console.error('Client-side error:', error.error.message);
      } else {
        const status = error.status;
        switch (status) {
          case 401:
            errorMessage = 'Session expired. Redirecting...';
            break;
          //router.navigate(['/login']);
          case 404:
            errorMessage = 'The requested resource was not found.';
            break;
          case 500:
            errorMessage = 'Internal server error';
            break;
          default:
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
      }
      console.error(errorMessage);
      toastService.show(errorMessage);
      return throwError(() => new Error(errorMessage));
    }),
  );
};
