  import { Component, OnInit } from '@angular/core';
  import { AdminApplicationService } from '../services/admin-application.service';
  import { RegisterUserHttpService } from '../services/register-user-http.service';
  import { Router } from '@angular/router';

  
  @Component({
    selector: 'app-userdashboard',
    templateUrl: './userdashboard.component.html',
    styleUrls: ['./userdashboard.component.css']
  })
  export class UserdashboardComponent implements OnInit {
  
    applicationList:any;
    // application!: Application;
    uId:number=10001;
    
    constructor(private applSer:AdminApplicationService, private userDetSer:RegisterUserHttpService, private router:Router) { }
  
    ngOnInit(): void {
     
     this.getApplicationByUserId();
    }
    getApplicationByUserId() {
      this.applSer.getApplicationByUserId(this.uId).subscribe(
        response=>{
          this.applicationList=response;
  
          // console.log(response);
          console.log(this.applicationList);
        }
      )
    }
  
    
  
    
  }