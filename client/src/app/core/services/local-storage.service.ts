import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getItem(key:string){
    const value = localStorage.getItem(key)
    if(value)
      return JSON.parse(value)
    // localStorage.getItem(key);
  }
  setItem(key:string,value:string){
    if(value)
      localStorage.setItem(key,value);
  }
  removeItem(key:string){
    localStorage.removeItem(key);
  }
  clearStorage(){
    localStorage.clear();
  }

  // getItem(){
  //   return window.localStorage.getItem('token');
  // }

  // setToken( token: string ){
  //   window.localStorage.setItem('token', token );
  // }

  // removeToken(){
  //   window.localStorage.removeItem('token');
  // }
}
