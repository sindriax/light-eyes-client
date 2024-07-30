import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Checklist } from 'app/shared/models/checklist';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';



interface ChecklistItem {
  content: string;
  checkListItemOptions: { content: string, isPositive: boolean }[];
}

interface ChecklistData {
  name: string;
  description: string;
  language: string;
  createdDate: string;
  checkListItems: ChecklistItem[];
}

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
}

// checklist editor 
private checklistData = new BehaviorSubject<ChecklistData | null>(null);
checklistData$ = this.checklistData.asObservable();

private selectedOptions = new BehaviorSubject<{ [key: string]: string }>({});
  selectedOptions$ = this.selectedOptions.asObservable();

setChecklistData(data: ChecklistData) {
  this.checklistData.next(data);
}

getChecklistData(): ChecklistData | null {
  return this.checklistData.value;
}

setSelectedOption(questionContent: string, selectedOption: string) {
  const currentSelectedOptions = this.selectedOptions.value;
  currentSelectedOptions[questionContent] = selectedOption;
  this.selectedOptions.next(currentSelectedOptions);
}

getSelectedOptions() {
  return this.selectedOptions.value;
}

/* 
getById(id: number) {
  const checklist = this.checklistData.find((item: { id: number; }) => item.id === id);
  return of(checklist); } */


}
