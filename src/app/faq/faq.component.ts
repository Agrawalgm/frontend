import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FaqService}from '../services/faq.service'
import {FAQ} from './FAQ'
import {Validators,FormGroup,FormBuilder,FormControl,NgModel}from '@angular/forms'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faq88 !: FormGroup;
    submitted = false;
  constructor(private fa:FaqService,private router:Router, private formBuilder:FormBuilder) { }
  customername: any;
  customeremail:any;
  querydes:any;
  faq1!:FAQ;
  question:any;
  solution:any;
  faqlist : FAQ[]=[];
  ngOnInit(): void {
    this.faq88 = this.formBuilder.group({
      customername: ['', Validators.required],
      customeremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      querydes: ['', [Validators.required,Validators.minLength(15)]]
    });
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
  this.fa.updateApplication(this.faq1).subscribe((response: any) => {
    this.faq1 = response;
    if(response){
      alert("Successfully Submitted");
    }else{
      alert("User does not exist");
    }
  })
 }
}
