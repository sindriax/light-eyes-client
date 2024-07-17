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
  http = inject(HttpClient)

  login(user:User){
    return this.http.post<User>(`${this.url}/login`, user).pipe(catchError(  e=>of(e)))
}
}