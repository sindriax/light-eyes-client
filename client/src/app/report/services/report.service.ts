import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Report } from 'app/shared/models/reports';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = 'http://localhost:3000';


  http = inject(HttpClient);
  getAllReport():Observable<Report[]>{
    return this.http.get<Report[]>(this.url.concat("/reports"));
  }
  constructor() { }
}
