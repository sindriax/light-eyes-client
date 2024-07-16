import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from 'app/shared/models/user';
import { environment } from 'environments/environment.development';
import { catchError, firstValueFrom, of, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
http = inject(HttpClient)

  // login(user: User){
  //   this.http.post<User>
  //   (`${environment.API_URL}/login`, user).pipe(catchError(e => of (e))).subscribe(r => localStorage.setItem('token',r.accesToken))

    // login(user:User){

    //   return this.http.post<User>(`${environment.API_URL}/login`, user).pipe(
    //   tap((response:any)=>{
    //   console.log(response.body)
    //   localStorage.setItem('id',response.body.user.id)
    //   }),
    //   catchError(  e=>of(e)))
    // } 

    async login(user:User){
      try {
        const result = await firstValueFrom(this.http.post<User>(`${environment.API_URL}/login`, user).pipe(catchError(e=>of(e))))
        localStorage.setItem('id',result.user.id)
        return result
      } catch (e) {
        return console.log(e)
      }
      }

    // getToken,setToken,RemoveToken
    // Después de esto nos aparecerá en la consola en access token.

// cambiamos el console.log(event.body)por

// localStorage.setItem('token',*event*.body.accessToken)
}

