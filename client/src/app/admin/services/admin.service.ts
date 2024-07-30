import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { ActivateUserRequest, PendingUser } from 'app/shared/models/auth';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl = environment.apiUrl;
  http = inject(HttpClient);
  storage = inject(LocalStorageService);

  constructor() { }

  getAllPendingUsers(): Observable<PendingUser[]> {
    console.log('Bearer ' + this.storage.getToken()); 
    const options = {
      headers: this.storage.sendHeaders()
    }
    console.log( options );
    return this.http.get<PendingUser[]>(this.apiUrl.concat('/Admin/pending-inactive-users'), options);
  }

  activateUser(userId: string) : Observable<unknown> {
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.storage.getToken(),
        'Content-Type': 'application/json-patch+json',
        'Accept': '*/*'
      }),
      responseType: 'text' as 'json'
    }
    const body : ActivateUserRequest = { id: userId };

    console.log( options );
    return this.http.post<unknown>(this.apiUrl.concat('/Admin/activate-user'), body , options);
  }
}
