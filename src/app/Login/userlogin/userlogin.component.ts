import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin.service';
import { UserLogin } from './UserLogin';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  email: string = "";
  password: string = "";
  user!: UserLogin;
  
  constructor(
    private userLoginSer: UserloginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(userLoginForm: any): void {
    this.email = userLoginForm.email;
    this.password = userLoginForm.password
    this.user = new UserLogin(this.email, this.password);
    this.userLoginSer.emit<string>(this.email);
    this.userLoginSer.userLoginFromRemote(this.user).subscribe((response: any) => {
      //console.log(response);
      this.user = response;
      if(response){
        alert("log in success");
        this.router.navigate(['/userdashboard'])
      }else{
        alert("User does not exist");
      }
    })

  }
 
 

}




