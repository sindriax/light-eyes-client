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

  apiUrl = environment.apiUrl;

  http = inject(HttpClient);
  storage = inject(LocalStorageService)


  getAllChecklist(): Observable<BasicCheckList[]> {
    return this.http.get<BasicCheckList[]>(
      this.apiUrl.concat('/CheckList/getAllChecklists')
    );
  }

  getAllCheckListFiltered(name: string): Observable<BasicCheckList[]>{
    return this.http.get<BasicCheckList[]>(this.apiUrl.concat(`/CheckList/getAllChecklists?Name=${name}`))
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

  