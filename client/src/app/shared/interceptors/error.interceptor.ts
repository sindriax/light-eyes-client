import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
  catchError((error:any)=>{
    if(error instanceof HttpErrorResponse){
      if(error.status === 400){
        console.log('Error 400',error.message)
      }
    }
    return throwError(()=>error);
  })
  )
};
