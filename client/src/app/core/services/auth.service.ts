import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from 'app/shared/models/user';
import { environment } from 'environments/environment';
import { catchError, firstValueFrom, of, tap } from 'rxjs';
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
private http = inject(HttpClient);
private localStorageService = inject (LocalStorageService)

async login(credentials: User) {
  if (!this.url) {
    throw new Error('API URL is not defined');
  }

  console.log('Sending login request to:', `${this.url}/login`);
  console.log('Request payload:', credentials);

  try {
    const result = await firstValueFrom(this.http.post<LoginResponseType>(`${this.url}/login`, credentials));
    const { accessToken, user } = result;
    this.localStorageService.setItem('user', JSON.stringify(user));
  } catch (e) {
    console.error('Error during login request:', e);
    throw (e);
  }
}

// getToken(): string | null {
//   return this.localStorageService.getItem('token');
// }

// setToken(token: string): void {
//   this.localStorageService.setItem('token', token);
// }

// removeToken(): void {
//   this.localStorageService.removeItem('token');
// }
}