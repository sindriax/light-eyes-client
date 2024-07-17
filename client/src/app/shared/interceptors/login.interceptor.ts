import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { catchError, tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService)

return next(req).pipe(tap((event: HttpEvent <any>) => {
  if (event instanceof HttpResponse){
    localStorageService.setItem('token',event.body.accessToken)
    console.log(event.body)
  } 
  return event
})
)
};


