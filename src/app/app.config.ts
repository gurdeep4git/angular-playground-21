import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { loaderInterceptor } from './interceptors/loader.interceptor';
import { authInterceptor } from './interceptors/auth.interceptor';
import { errorHandlingInterceptor } from './interceptors/error-handling.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([authInterceptor, loaderInterceptor, errorHandlingInterceptor])),
  ],
};
