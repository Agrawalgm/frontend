import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup} from '@angular/forms'
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import {FaqService}from '../services/faq.service'
import {FAQ} from './FAQ'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private faq:FaqService,private router:Router) { }
  regform!: FormGroup;

  faqlist : FAQ[]=[];
  ngOnInit(): void {
    this.getfaqlist();
  }
  getfaqlist()
  {
    this.faq.allfaqlist().subscribe(
      response =>
       { 
        this.faqlist = response;    
        console.log(this.faqlist);
       });
  }
  // cust_name:any;
  // cust_email:any;
  // cust_descp=any;
  // clicking(val:any){
  //   this.cust_name = val.name;
  //   this.cust_email = val.email;
  //   this.cust_descp = val.Comments;
  //   this.updateStatus();
  //   }

  // updateStatus(cust_name:any,cust_email:any,cust_descp:any){

  //   this.faq.updateApplication().subscribe(
  //     response =>
  //     {
  //       alert("Approved");

  //     }
  //   )
}
