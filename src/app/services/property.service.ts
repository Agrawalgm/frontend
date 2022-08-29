import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  baseURL: string = "http://localhost:8786/homeloanappln";
  constructor(private httpSer: HttpClient) { }

  public addPropertyInfo(property:any){
    return this.httpSer.post<any>(this.baseURL + "/propertydto",property);
  }
}
