import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Checklist } from 'app/shared/models/checklist';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  private url = 'http://localhost:3000';
  apiUrl = environment.apiUrl;

  http = inject(HttpClient);
  getAllChecklist(): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(this.apiUrl.concat('/CheckList'));
  }

  // https = inject(HttpClient);
  // getAllChecklistItem(): Observable<Checklist[]> {
  //   return this.http.get<Checklist[]>(this.url.concat('/checklists/item'));
  // }

  constructor() {}
}
