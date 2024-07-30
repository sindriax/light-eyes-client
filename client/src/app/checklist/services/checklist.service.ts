import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BasicCheckList } from 'app/shared/models/checklist';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  apiUrl = environment.apiUrl;
  http = inject(HttpClient);

  getAllChecklist(): Observable<BasicCheckList[]> {
    return this.http.get<BasicCheckList[]>(
      this.apiUrl.concat('/CheckList/getAllChecklists')
    );
  }

  getAllCheckListFiltered(name: string): Observable<BasicCheckList[]>{
    return this.http.get<BasicCheckList[]>(this.apiUrl.concat(`/CheckList/getAllChecklists?Name=${name}`))
  }

  constructor() {}
}
