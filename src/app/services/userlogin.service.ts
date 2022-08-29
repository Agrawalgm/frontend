import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../Login/userlogin/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  userLogin(user: UserLogin) {
    throw new Error('Method not implemented.');
  }

  

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8786/homeloanappln"
  

  public userLoginFromRemote(user : UserLogin):Observable<any>{
  console.log(user)
  return this.http.post<any>(this.baseUrl +"/userlogin",user);

  }

 
}
