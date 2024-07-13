import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from 'app/shared/models/user';
import { environment } from 'environments/environment.development';
import { catchError, firstValueFrom, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
http = inject(HttpClient)

  login(user: User){
    this.http.post<User>
    (`${environment.API_URL}/login`, user).pipe(catchError(e => of (e))).subscribe(r => localStorage.setItem('token',r.accesToken))
  }
}
