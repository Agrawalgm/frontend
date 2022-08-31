  import { Component, OnInit} from '@angular/core';
  import { AdminApplicationService } from '../services/admin-application.service';
  import { RegisterUserHttpService } from '../services/register-user-http.service';
  import { Router } from '@angular/router';
  import { UserloginService } from 'src/app/services/userlogin.service';
  import {Application} from 'src/app/admindashboard/Application'
  @Component({
    selector: 'app-userdashboard',
    templateUrl: './userdashboard.component.html',
    styleUrls: ['./userdashboard.component.css']
  })
  export class UserdashboardComponent implements OnInit {
    applicationList:any;
    mail :any ;
    
    constructor(private applser:AdminApplicationService, private userDetSer:RegisterUserHttpService, private router:Router
      , private userlogser:UserloginService) { 
        this.userlogser.on<string>().subscribe(
        data =>{
          this.mail=data;
        }
      )}
     

    ngOnInit(): void {
     this.getdetail();
    }
    getdetail() {
      this.applser.getloandetail(this.mail).subscribe(
        response=>{
          this.applicationList=response;
           console.log(this.mail);
          console.log(this.applicationList);
        }
      )
    }

  
    
  
    
  }