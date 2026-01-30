import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const token = `QWEwerweDSG`;
  // Only add token if the request is for our own API
  if (req.url.includes('search')) {
    // Clone the request and attach the token
    // Requests are immutable; you must "clone" a request to modify it.
    const modifiedReq: HttpRequest<unknown> = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        // You can send whatever you want
        tenantId: '123',
      },

      // Globally set the query params globally => URL will be https://dummyjson.com/recipes/search?q=Margherita
      //params: req.params.set('q', 'Margherita'),
    });
    return next(modifiedReq);
  }
  // If there is no token, pass the original request
  return next(req);
};
