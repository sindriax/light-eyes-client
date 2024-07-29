import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Report, ReportControlData } from 'app/shared/models/reports';
import { environment } from 'environments/environment.development';
import {  Observable } from 'rxjs';

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

  getAllReportControlData():Observable<ReportControlData[]>{
    return this.http.get<ReportControlData[]>(
      this.url.concat('/Reportss')
      // Report/getAllReports es la url correcta
    )
  }

  addReport( report: Report ){
    return this.http.post<Report>(this.url, report );
  }

  
  constructor() { }
}
