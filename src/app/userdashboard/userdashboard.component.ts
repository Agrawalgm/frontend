  import { Component, OnInit } from '@angular/core';
  import { AdminApplicationService } from '../services/admin-application.service';
  import { RegisterUserHttpService } from '../services/register-user-http.service';
  import { Router } from '@angular/router';
import { Application } from '../admindashboard/Application';

  
  @Component({
    selector: 'app-userdashboard',
    templateUrl: './userdashboard.component.html',
    styleUrls: ['./userdashboard.component.css']
  })
  export class UserdashboardComponent implements OnInit {
  
    applicationList:Application[]=[];
    uId:number=10002;
    
    constructor(private applser:AdminApplicationService, private userDetSer:RegisterUserHttpService, private router:Router) { }
  
    ngOnInit(): void {
     
     this.getApplicationlist();
    }
    getApplicationlist() {
      this.applser.getapplicationlist().subscribe(
        response=>{
          this.applicationList=response;
  
          // console.log(response);
          console.log(this.applicationList);
        }
      )
    }
  
    
  
    
  }