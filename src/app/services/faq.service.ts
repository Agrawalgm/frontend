import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FAQ} from 'src/app/faq/FAQ'
@Injectable({
  providedIn: 'root'
})
export class FaqService {
  baseurl: string = "http://localhost:8786/faq";
  constructor(private httpSer: HttpClient) { }


  public allfaqlist(){
    return this.httpSer.get<[FAQ]>(this.baseurl+"/faqlist");
  }
  // public updateApplication(cust_doubt:Cust_Doubt){
  //   return this.httpSer.put(this.baseurl+'/icustdoubt',cust_doubt);
  // }

  
}
