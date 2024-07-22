import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getItem(key:string): any{
    const value = localStorage.getItem(key)
    if(value)
      return JSON.parse(value)
      return null;
    // localStorage.getItem(key);
  }
  setItem(key:string,value:any){
    if(value)
      localStorage.setItem(key, JSON.stringify(value));
  }
  removeItem(key:string){
    localStorage.removeItem(key);
  }
  clearStorage(){
    localStorage.clear();
  }

}
