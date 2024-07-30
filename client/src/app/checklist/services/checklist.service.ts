import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { BasicCheckList } from 'app/shared/models/checklist';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  apiUrl = environment.apiUrl;
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

  getAllCheckListFiltered(name: string): Observable<BasicCheckList[]> {
    const options = {
      headers: this.storage.sendHeaders(),
    };
    return this.http.get<BasicCheckList[]>(
      this.apiUrl.concat(`/CheckList/getAllChecklists?Name=${name}`), options
    );
  }

  constructor() {}
}
