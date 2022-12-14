import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../admindashboard/Application';

@Injectable({
  providedIn: 'root'
})
export class AdminApplicationService {

  baseurl: string = "http://localhost:8786/admin";
  

  constructor(private httpSer: HttpClient) { }

  public getapplicationlist(){
    return this.httpSer.get<Application[]>(this.baseurl+"/allapplns");
  }

  public getloandetail(mail:any){
    return this.httpSer.get<Application[]>(this.baseurl+"/get-application-by-email/"+mail);
  }
  public getpendingapplnlist(){
    return this.httpSer.get<Application[]>(this.baseurl+"/pendingapplns");
  }
  public getapprovedapplnlist(){
    return this.httpSer.get<Application[]>(this.baseurl+"/approvedapplns");
  }
  public getrejectedapplnlist(){
    return this.httpSer.get<Application[]>(this.baseurl+"/rejectedapplns");
  }
 

  public updateApplication(applicationId:number,status:string){
    return this.httpSer.put(this.baseurl+"/update-application-status/"+applicationId+"/"+status,{});
  }


public getApplicationListByStatus(status:string){
    return this.httpSer.get<Application[]>(this.baseurl+"/get-application-by-status/"+status);
  }

  public getApplicationByUserId1(applicationId:Number){
    return this.httpSer.get<Application[]>(this.baseurl+"/get-application-by-id/"+applicationId);
  }
  public getApplicationByUserId(userId:number){
    // let userDetails = JSON.parse(localStorage.getItem("user_data")|| "");
   
    return this.httpSer.get<Application[]>(this.baseurl+"/get-application-by-userId/"+userId);
}
  
}