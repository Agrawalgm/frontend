import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, Validators } from '@angular/forms';
import { AdminloginService } from 'src/app/services/adminlogin.service';
import { Route, Router } from '@angular/router';
import {AdminLogin} from './AdminLogin'
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  userName: string = "";
  password: string = "";
  admin !: AdminLogin;
  constructor(private service:AdminloginService , private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 

  onSubmit(adminLoginForm: any): void {
    this.userName = adminLoginForm.userName;
    this.password = adminLoginForm.password
    this.admin = new AdminLogin(this.userName, this.password);

    this.service.loginAdminFromRemote(this.admin).subscribe((response: any) => {
      console.log(response);
      this.admin = response;
      if(response){
        alert("log in success");
        this.route.navigate(['/admindashboard'])
      }else{
        alert("Admin does not exist");
      }
    })

  }
}
