import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {

  // import localStorageService and implement underneath!!!!!

return next(req).pipe(tap((event: HttpEvent <any>) => {
  if (event instanceof HttpResponse){
    localStorage.setItem('token',event.body.accessToken)
    // console.log(event.body)
  } 
  return event
}))
};

// TO DO:
// Para obtener el token es interesante en AuthService tener un getToken ( ), setToken ( ), removeToken ( ).

// Después de esto nos aparecerá en la consola en access token.

// cambiamos el console.log(event.body)por

// localStorage.setItem('token',*event*.body.accessToken)