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
  clicking(val:any){
  this.sal = val.salary;
  this.nofomonth = val.noofmonth;
  this.eligibilitycal();
  }

  eligibilitycal()
  {
    this.partofsal=Number((((this.sal*0.3)*this.nofomonth)).toFixed(2));
  }
  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}
}







