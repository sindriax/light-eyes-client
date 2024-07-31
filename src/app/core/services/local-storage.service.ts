import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }
  
  removeToken(){
    localStorage.removeItem('token');
  }

  sendHeaders(){
    return new HttpHeaders({'Authorization': 'Bearer ' + this.getToken()});
  }
}
