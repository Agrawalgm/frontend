export class LoanApplicationDTO {
    applicationId:number=0;
    loanAmount: number=0;
    tenure: number=0;
    interest: number=0;
    status: string="";
    userId:number=0;
  
  
    constructor(applicationId:number,loanAmount: number, tenure: number, interest: number,status: string,userId:number){
      this.applicationId=applicationId;  
      this.loanAmount = loanAmount;
      this.tenure = tenure;
      this.interest = interest;
      this.status = status;
      this.userId=userId;
      
      
    }
  }