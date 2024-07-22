import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorChecklistService {


  private url = 'http://localhost:3000';


  http = inject(HttpClient);



  constructor() { }
}
