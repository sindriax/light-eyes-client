import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req).pipe(tap((event: any) => {console.log(event.body)}));
// };

return next(req).pipe(tap((event: HttpEvent <any>) => {
  if (event instanceof HttpResponse){
    localStorage.setItem('token',event.body.accessToken)
    console.log(event.body)
  } 
  return event
  // Hay que borrar cualquier otro setItem que tengamos en login.ts or wherever porque sino no cogerá el token bien.
}))
};