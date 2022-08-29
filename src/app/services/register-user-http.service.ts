import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../register-user/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserHttpService {

    baseUrl="http://localhost:8786/homeloanappln";
    constructor(private http: HttpClient) { }
  
    
    public registerUser(user:User){
      return this.http.post<any>(this.baseUrl + '/adduser', user);
    }

    public getUserById(){
      let user = JSON.parse(localStorage.getItem("user_data")|| "")
    return this.http.get<User>(this.baseUrl+'/users/'+user.userId);
      
    }

  }
