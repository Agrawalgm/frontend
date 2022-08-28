import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApplicationService } from '../services/admin-application.service';
import { Application } from './Application';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  applicationList:Application[]=[];
  constructor(private applSer:AdminApplicationService,private router:Router) { }

 count :any ;
  status:any;
ngOnInit(): void {
  this.getAllApplnList();
}
  getAllApplnList() {
    this.applSer.getApplicationList().subscribe(
      response => { 
        this.applicationList = response;
        console.log(this.applicationList);
      });
  }

  toggle = "approve";  
  updateStatus(applicationId:number){

    this.applSer.updateApplication(applicationId,this.toggle).subscribe(
      response =>
      {
        alert("Approved");

      }
    )


  }

  toggle1="rejected";

  updateStatus1(applicationId:number){

    this.applSer.updateApplication(applicationId,this.toggle1).subscribe(
      response =>
      {
        alert("Rejected");

      }
    )
}
onClick(pending:any){}





}

