import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FAQ} from 'src/app/faq/FAQ'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class FaqService {
  freaskedque(faq: FAQ) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpSer: HttpClient)
  { 

  }
  baseurl: string = "http://localhost:8786/faq";
  


  public allfaqlist(){
    return this.httpSer.get<[FAQ]>(this.baseurl+"/faqlist");
  }
  public updateApplication(faq:FAQ):Observable<any>{
    //const options = new HttpHeaders({'content-type':'application.json'});
   // const body = JSON.stringify(faq);
     return this.httpSer.post(this.baseurl+"/icustdoubt",faq);
   }

  
}
