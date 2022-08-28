import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SelfemployedService} from '../services/selfemployed.service';

@Component({
  selector: 'app-selfemployed',
  templateUrl: './selfemployed.component.html',
  styleUrls: ['./selfemployed.component.css']
})
export class SelfemployedComponent implements OnInit {

  selfEmployedForm!: FormGroup;
  selfEmployed:any;
  userId:any;

  constructor(private selfEmployedSer:SelfemployedService,private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    this.selfEmployedForm=this.fb.group({
      // srNo: ['',Validators.required],
      turnover:['',Validators.required],
      natureOfBusiness:["",Validators.required],
      userId: [this.userId,Validators.required]
    });
  }

  onSubmit(){

    this.selfEmployedSer.addSelfEmployedIncomeInfo(this.selfEmployedForm.value).subscribe(
      Response => {
        console.log("record addded");
        this.selfEmployed = Response;
        console.log(this.selfEmployed);
        this.router.navigate(['/property']);
      }
    );
  }

}

