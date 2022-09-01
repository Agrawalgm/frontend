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

  applicationlist:Application[]=[];
  approvedlist:Application[]=[];
  rejectedlist:Application[]=[];
  pendinglist:Application[]=[];
  allappcount:any;
  approvedcount:any;
  pendingcount:any;
  status:any;
  constructor(private applser:AdminApplicationService,private router:Router) { }
  
ngOnInit(): void 
 {
  this.getallapplist();
  this.getpendinglist();
  this.getapprovedlist();
  this.getrejectedlist();
 }
  getallapplist()
   {
     this.applser.getapplicationlist().subscribe(
      response =>
       { 
        this.applicationlist = response;
        this.allappcount=this.applicationlist.length;        
        console.log(this.applicationlist);
       });
   }
  getpendinglist()
  {
    this.applser.getpendingapplnlist().subscribe(
      response =>
       { 
        this.pendinglist = response;
        this.pendingcount=this.pendinglist.length;        
        console.log(this.pendinglist);
       });
  }
  getapprovedlist()
  {
    this.applser.getapprovedapplnlist().subscribe(
      response =>
       { 
        this.approvedlist = response;
        this.approvedcount=this.approvedlist.length;        
        console.log(this.approvedlist);
       });
  }
  getrejectedlist()
  {
    this.applser.getrejectedapplnlist().subscribe(
      response =>
       { 
        this.rejectedlist = response;
        console.log(this.rejectedlist);
       });
  }
  toggle = "Approved";  
  updateStatus(applicationId:number){
    this.applser.updateApplication(applicationId,this.toggle).subscribe(
      response =>
      {
        alert("Approved");
      });
  }

  toggle1="Rejected";
  updateStatus1(applicationId:number){
    this.applser.updateApplication(applicationId,this.toggle1).subscribe(
      response =>
      {
        alert("Rejected");
      }
    )
}
isapproved = false;    
   displayapproved() {  
      this.isapproved = !this.isapproved;  
      this.ispending = false;
      this.isrejected = false; 
} 
ispending = false;    
   displaypending() {  
      this.ispending = !this.ispending; 
      this.isapproved = false;  
      this.isrejected = false; 
} 
isrejected = false;    
    displayrejected() {  
      this.isapproved = false;  
      this.ispending = false;
      this.isrejected = !this.isrejected;  
} 
reloadCurrentPage() {
  window.location.reload();
 }
}

