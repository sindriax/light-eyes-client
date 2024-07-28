import { HttpClient, HttpHandler } from '@angular/common/http';
import { ErrorHandler, inject, Injectable } from '@angular/core';
import { Report } from 'app/shared/models/reports';
import { environment } from 'environments/environment.development';
import { catchError, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = 'http://localhost:3000';
  apiUrl = environment.apiUrl;

  http = inject(HttpClient);
  getAllReport():Observable<Report[]>{
    return this.http.get<Report[]>(this.url.concat('/Report'));
  }

  addReport( report: Report ){
    return this.http.post<Report>(this.url, report );
  }

  
  constructor() { }
}
