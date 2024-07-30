import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from 'app/core/services/local-storage.service';
import { Report, ReportControlData } from 'app/shared/models/reports';
import { environment } from 'environments/environment.development';
import {  firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = 'http://localhost:3000';
  apiUrl = environment.apiUrl;
  localStorage = inject(LocalStorageService);

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

  async addReport( report: Report ){
    const result = await firstValueFrom(this.http.post<Report>(this.url, report ));
  }

  
  constructor() { }
}
