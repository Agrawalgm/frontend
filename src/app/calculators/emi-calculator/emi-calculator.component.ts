import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
    
  }

  loan_amt :any=0;
  noofmonth :any ;
  interest: any;
  emi: any;
  totalamt:any=0;
  value : any;
  r:any;
  clicking(emiForm:any){    
    this.loan_amt= emiForm.loan_amt;
    this.noofmonth = emiForm.noofmonth;
    this.interest = emiForm.interest;
    this.r = emiForm.roi;
    this.calculateEmi();
  }

  calculateEmi() {
    

    var roi = ((this.r/12)/100)
    var top = Math.pow((1 + roi), this.noofmonth);
    var bottom = top - 1;
    var sp = top / bottom;
    this.emi = Number((this.loan_amt * roi) * sp).toFixed(0);
    this.totalamt=Number(this.noofmonth*this.emi).toFixed(0);
    this.value=true;    
  }
  isShown: boolean = false ; // hidden by default
toggleShow() {

this.isShown = ! this.isShown;

}
}
