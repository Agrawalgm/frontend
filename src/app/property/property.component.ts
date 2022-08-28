import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PropertyService} from '../services/property.service';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  propertyForm !: FormGroup;
  property:any;
  userId:any;
  constructor(private propertySer:PropertyService,private fb:FormBuilder,private router:Router) { 

  }

  ngOnInit(): void {
       this.userId = localStorage.getItem("userId");
       this.propertyForm = this.fb.group({
        // propertyId:[0,Validators.required],
        propertyName:["",Validators.required],
        propertyLocation:["",Validators.required],
        amount:[0,Validators.required],
        userId:[this.userId,Validators.required]
       });
  }

  onSubmit(){
    this.propertySer.addPropertyInfo(this.propertyForm.value).subscribe(
      Response=>{
        console.log("property record added");
        this.property = Response;
        console.log(this.property);
        this.router.navigate(['/loanapplication'])
      }
    )
  }

}

