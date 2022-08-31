import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin.service';
import { UserLogin } from './UserLogin';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  email:any;
  password: string = "";
  user!: UserLogin;
  userLoginForm !:FormGroup;

  
  constructor(private service:UserloginService , private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userLoginForm=this.fb.group({email:['',Validators.required],
  password:['',Validators.required]});
  }

  onSubmit(userLoginForm: any): void {
    this.email = userLoginForm.email;
    this.password = userLoginForm.password
    this.user = new UserLogin(this.email, this.password);
    this.service.emit<string>(this.email);
    this.service.userLoginFromRemote(this.user).subscribe((response: any) => {
      //console.log(response);
      this.user = response;
      if(response){
        alert("log in success");
        this.route.navigate(['/userdashboard'])
      }else{
        alert("User does not exist");
      }
    })

  }
 
 

}




