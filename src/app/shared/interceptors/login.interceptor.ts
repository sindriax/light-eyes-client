import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { environment } from 'environments/environment';
import { Observable, tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const localStorageService = inject(LocalStorageService);

  return next(req).pipe(tap(( response : any) => {

    if (response.ok && response.url?.startsWith(`${environment.apiUrl}/account/login`) ){
      console.log( 'login response is ok', response );
      localStorageService.setToken(response.body.token);
    } else if (response.ok && response.url?.startsWith(`${environment.apiUrl}/account/register`)) {
      console.log('register response is ok', response );
      // localStorageService.setToken(response.body.token);
    }
    return response
  })
  )
};