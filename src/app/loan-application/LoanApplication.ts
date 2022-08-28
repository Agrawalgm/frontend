export class LoanApplication {
    loanAmount: number=0;
    tenure: number=0;
    interest: number=0;
    //status: string="";
  
  
    constructor(loanAmount: number, tenure: number, interest: number){
      this.loanAmount = loanAmount;
      this.tenure = tenure;
      this.interest = interest;
      //this.status = status;, status: string
      
    }
  }