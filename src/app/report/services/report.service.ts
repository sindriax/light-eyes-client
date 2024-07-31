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
  apiUrl = environment.API_URL;
  storage = inject(LocalStorageService);
  http = inject(HttpClient);

  getAllReport():Observable<Report[]>{
    const options = {
      headers: this.storage.sendHeaders()
    }
    return this.http.get<Report[]>(this.apiUrl.concat('/Report'), options);
  }

  getAllReportControlData():Observable<ReportControlData[]>{
    const options = {
      headers: this.storage.sendHeaders()
    }
    return this.http.get<ReportControlData[]>(
      this.apiUrl.concat('/Report'), options
      // Report/getAllReports es la url correcta
    )
  }

  // async addReport( report: Report ){
  //   const options = {
  //     headers: this.storage.sendHeaders()
  //   }
  //   // const body : Report = {};

  //   const result = await firstValueFrom(this.http.post<Report>(this.url, report ));
  // }

  
  constructor() { }
}
