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

  constructor(private fa:FaqService,private router:Router) { }
  
  customername:any;
  customeremail:any;
  querydes:any;
  faq1!:FAQ;
  question:any;
  solution:any;
  faqlist : FAQ[]=[];
  ngOnInit(): void {
    this.getfaqlist();
  }
  getfaqlist()
  {
    this.fa.allfaqlist().subscribe(
      response =>
       { 
        this.faqlist = response;    
        console.log(this.faqlist);
       });
  }
 onSubmit(faq88:any){
  this.customername = faq88.customername;
  this.customeremail = faq88.customeremail;
  this.querydes=faq88.querydes;
  this. question=null;
  this.solution=null;
  this.faq1 = new FAQ(this.customername, this.customeremail,this.querydes,this.question,this.solution);
 console.log(this.faq1);
  this.fa.updateApplication(this.faq1).subscribe((response: any) => {
    console.log(response);
    this.faq1 = response;
    if(response){
      alert("Successfully Submitted");
    }else{
      alert("User does not exist");
    }
  })
 }
}
