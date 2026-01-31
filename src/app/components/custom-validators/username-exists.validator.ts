import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
} from '@angular/forms';
import { map, of } from 'rxjs';

export function userNameExists(http: HttpClient): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) return of(null);

    return http
      .get(`https://dummyjson.com/users/search?q=${control.value}`)
      .pipe(
        map((res: any) => {
          if (res?.users?.length) {
            return { userExists: true };
          }
          return null;
        }),
      );
  };
}
