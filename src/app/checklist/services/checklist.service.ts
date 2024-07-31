import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BasicCheckList, CheckList, NewChecklistData } from 'app/shared/models/checklist';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { LocalStorageService } from 'app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService{

  apiUrl = environment.API_URL;
  http = inject(HttpClient);
  storage = inject(LocalStorageService);

  getAllChecklist(): Observable<BasicCheckList[]> {
    const options = {
      headers: this.storage.sendHeaders(),
    };
    return this.http.get<BasicCheckList[]>(
      this.apiUrl.concat('/CheckList/getAllChecklists'), options
    );
  }

  getSavedCheckListById(id: number): Observable<CheckList>{
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.storage.getToken(),
        'Accept': 'application/json'
      })};

      return this.http.get<CheckList>(`${this.apiUrl}/CheckList/${id}`, options)
  };

  getAllCheckListFiltered(name: string): Observable<BasicCheckList[]> {
    const options = {
      headers: this.storage.sendHeaders(),
    };
    return this.http.get<BasicCheckList[]>(
      this.apiUrl.concat(`/CheckList/getAllChecklists?Name=${name}`), options
    );
  }
  

  constructor() { }

  sendChecklistData(checklistData: NewChecklistData): Observable<CheckList>{
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.storage.getToken(),
        'Content-Type': 'application/json-patch+json',
        'Accept': '*/*'
      }),
      responseType: 'text' as 'json'
    }
    const body : NewChecklistData = checklistData;
    return this.http.post<CheckList>(this.apiUrl.concat('/CheckList/createByTransaction'), body, options);
  }

}

  