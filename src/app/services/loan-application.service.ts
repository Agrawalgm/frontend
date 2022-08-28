import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  baseUrl="http://localhost:8090/homeloanappln"

  constructor(private http: HttpClient) { }

  public addLoanApplicationInfo(appln:any){
    return this.http.post<any>(this.baseUrl+ '/loanapplicationdto', appln);
  }
   

  
}
