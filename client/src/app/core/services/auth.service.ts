import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from 'app/shared/models/user';
import { environment } from 'environments/environment';
import { catchError, firstValueFrom, Observable, of, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

type LoginResponseType = {
  accessToken: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl;
  http = inject(HttpClient)
  localStorageService = inject (LocalStorageService)
  token: string = '';

  login(user:User){
    return this.http.post<User>(`${this.url}/login`, user).pipe(
      tap((response: any) => {
        if (response && response.accessToken) {
          this.localStorageService.setItem('token', response.accessToken);
          this.token = response.accessToken;
        }
      }),
      catchError(  e=>of(e)))
}

  register(user:any):Observable<any>{
    return this.http.post(`${this.url}/users`, user);
  }



//FOR GUARD:
  isAuth() {
    this.token = this.localStorageService.getItem('token');
    return this.token.length > 0;
  }
}