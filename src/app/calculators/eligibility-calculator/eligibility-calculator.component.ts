import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormsModule } from '@angular/forms'

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {
  
  
  ngOnInit(): void {
  
  }
  partofsal:any =0;
  sal:any;
  nofomonth:any;
  r:any;
  otheremi:any =0;
  emi:any;
  clicking(val:any){
  this.sal = val.salary;
  this.nofomonth = val.noofmonth;
  this.r = val.roi;
  this.otheremi = val.otheremi;
  this.eligibilitycal();
  }

  eligibilitycal()
  {
    var roi = ((10.5/12)/100)
    var top = Math.pow((1 + roi), (this.nofomonth*12));
    var bottom = top - 1;
    var sp = top / bottom;
    this.emi = Number((100000 * roi) * sp).toFixed(0);
    this.partofsal=Number((((((this.sal*0.5)-this.otheremi))/this.emi)*100000).toFixed(0));
  }
  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}
}







