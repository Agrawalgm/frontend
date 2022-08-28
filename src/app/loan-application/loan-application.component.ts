import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanApplicationService } from '../services/loan-application.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  LoanApplicationForm!: FormGroup;
  loan:any;
  userId:any;
  
  constructor(private loanSer:LoanApplicationService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(){
    this.userId = localStorage.getItem("userId");
    this.LoanApplicationForm = this.fb.group({
      // srNo: ['', Validators.required],
      loanAmount: ['', Validators.required],
      tenure: ['', Validators.required],
      interest: ['',Validators.required],
      status:['pending',Validators.required],
      userId: [this.userId,Validators.required]

    });
    
  }

   onSubmit(){
   this.loanSer.addLoanApplicationInfo(this.LoanApplicationForm.value).subscribe(
       Response => {
                   alert("record added , login to check loan status")
                   this.loan= Response;
                  // localStorage.removeItem('userId');
                   this.router.navigate(['/dashboard']);
                    
                    
                   }
     );
    
   }


 

}
