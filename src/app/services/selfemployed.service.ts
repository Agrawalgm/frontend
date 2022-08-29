import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelfemployedService {
  baseURL: string = "http://localhost:8786/homeloanappln";


  constructor(private httpSer:HttpClient) {

   }

   public addSelfEmployedIncomeInfo(selfEmployed:any){
    return this.httpSer.post<any>(this.baseURL + '/selfemployedincomedto',selfEmployed);
   }
}
