import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Checklist } from 'app/shared/models/checklist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  private url = 'http://localhost:3000';


  http = inject(HttpClient);
  getAllChecklist():Observable<Checklist[]>{
    return this.http.get<Checklist[]>(this.url.concat("/checklists"));
  }

  constructor() { }

  sendChecklistData(checklistData: {[key: string]: string }){
    return this.http.post(this.url, checklistData)
}}
