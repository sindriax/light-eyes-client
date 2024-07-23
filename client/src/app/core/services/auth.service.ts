import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { UserLogin, UserRegister, UserResponse } from 'app/shared/models/user';
import { environment } from 'environments/environment';
import { catchError,  of, tap, throwError } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl;
  http = inject(HttpClient)
  localStorageService = inject (LocalStorageService)
  isLogged = signal<boolean>(false);
  router = inject (Router);

constructor (){
  if(this.localStorageService.getToken()){
    this.isLogged.set(true);
  } else {
    this.isLogged.set(false);
  }
}

  login(user:UserLogin){
    const options = {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
    }

    return this.http.post<UserLogin>(`${this.url}/account/login`, user, options).pipe(
      tap((response: any) => {
        if (this.localStorageService.getToken()) {
          this.isLogged.set(true);
        } 
      }),
      catchError(  e=>of(e)))
  }
    
    
  register(user: UserRegister) {
    const options = {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
    }
    
    return this.http.post<UserResponse>(`${this.url}/account/register`, user, options).pipe(
      tap((response: any) => {
        console.log('Registration successful:', response);
        if (this.localStorageService.getToken()){
          this.isLogged.set(true)
        }
      }),
      catchError(e => {
        console.error('Registration error:', e);
        return throwError(e);
      })
    );
  }
    
    logout (){
      this.localStorageService.removeToken();
      this.isLogged.set(false);
      this.router.navigate(['/auth'])
    }
}