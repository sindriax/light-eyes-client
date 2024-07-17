import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService)

  // import localStorageService and implement underneath!!!!!

return next(req).pipe(tap((event: HttpEvent <any>) => {
  if (event instanceof HttpResponse){
    localStorageService.setItem('token',event.body.accessToken)
    console.log(event.body)
  } 
  return event
}))
};


