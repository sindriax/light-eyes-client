import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Checklist, NewChecklistData } from 'app/shared/models/checklist';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { LocalStorageService } from 'app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  apiUrl = environment.apiUrl;

  http = inject(HttpClient);
  storage = inject(LocalStorageService)

  
  getAllChecklist():Observable<Checklist[]>{
    return this.http.get<Checklist[]>(this.apiUrl.concat("/checklists"));
  }

  constructor() { }

  sendChecklistData(checklistData: NewChecklistData): Observable<Checklist>{
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.storage.getToken(),
        'Content-Type': 'application/json-patch+json',
        'Accept': '*/*'
      }),
      responseType: 'text' as 'json'
    }
    const body : NewChecklistData = checklistData;
    return this.http.post<Checklist>(this.apiUrl.concat('/CheckList/createByTransaction'), body, options);
}}
