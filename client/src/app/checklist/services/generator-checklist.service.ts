import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Checklist } from 'app/shared/models/checklist';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorChecklistService {


  private url = 'http://localhost:3000';


  http = inject(HttpClient);

saveChecklist(checklist: Checklist): Observable<any>{
  return this.http.post(this.url, checklist)
}


private answersSubject = new BehaviorSubject<any[]>([]);
answers$ = this.answersSubject.asObservable();

addAnswer(answer: any) {
  const currentAnswers = this.answersSubject.value;
  this.answersSubject.next([...currentAnswers, answer]);

 
}}
