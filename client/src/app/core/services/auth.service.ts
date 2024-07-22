import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from 'app/shared/models/user';
import { environment } from 'environments/environment';
import { catchError, firstValueFrom, map, Observable, of, switchMap, tap } from 'rxjs';
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
  users: User[] = [];

  login(user:User){
    return this.http.post<User>(`${this.url}/login`, user).pipe(
      tap((response: any) => {
        if (response && response.accessToken) {
          this.localStorageService.setItem('token', response.accessToken);
          this.token = response.accessToken;

          user.token = this.token;
          console.log('User email:', user.email);
          return this.http.get<User[]>(`${this.url}/users`).pipe(
            map(users => {
              // intentar encontrar usuario con matching token
              const matchingUser = users.find(u => u.token === this.token);
              if (matchingUser && matchingUser.id) {
                // guardar el id del user y hacer un PUT con ese ID
                console.log('User ID:', matchingUser.id);
                return this.http.put<User>(`${this.url}/users/${matchingUser.id}`, user);
              } else {
                console.error('User not found by token');
                return of(null);
              }
            }),
            switchMap(updateRequest => updateRequest)
          );
        } else {
//si no se recive token
          console.error('No access token received');
          return of(null);
        }
      }),
      catchError(error => {
        console.error('Login error', error);
        return of(error);
      })
    );
  }


  register(user:any):Observable<any>{
    return this.http.post(`${this.url}/users`, user);
  }



//FOR GUARD:
  // isAuth() {
  //   this.token = this.localStorageService.getItem('token');
  //   return this.token.length > 0;
  // }

  isAuth(): boolean {
    const storedToken = this.localStorageService.getItem('token');
    const isValidToken = this.validateTokenWithDatabase(storedToken);
    return isValidToken;
  }

  private validateTokenWithDatabase(token: string): boolean {
    const matchingUser = this.users.find((user) => user.token === token);

    return !!matchingUser;
    // return !!token;
  }
}