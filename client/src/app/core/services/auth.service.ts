import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { UserLogin, UserRegister, UserResponse } from 'app/shared/models/user';
import { environment } from 'environments/environment';
import { catchError,  of, tap, throwError } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { JwtToken } from 'app/shared/models/auth';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl;
  private tokenKey = 'auth-token';

  private http = inject(HttpClient)
  private router = inject(Router);
  private localStorageService = inject(LocalStorageService);

  isLogged = signal<boolean>(false);

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
      catchError(e=>of(e)))
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

  isAuthenticated(): boolean {
    const token = this.localStorageService.getToken();
    // returns true if token exists and is not expired
    return token != null && !this.isTokenExpired(token);
  }

  // Checks if time of token is expired based on time that token was created and time is method called
  private isTokenExpired(token: string): boolean {
    const decoded: JwtToken = jwtDecode<JwtToken>(token);
    return decoded.exp * 1000 < Date.now();
  }

  getUserRoles(): string[] {
    const token = this.localStorageService.getToken();
    if (!token)
      return [];
    
    const decoded: JwtToken = jwtDecode<JwtToken>(token);
    return decoded.role;
  }

  isAdmin(): boolean {
    return this.getUserRoles().includes('Admin');
  }
}