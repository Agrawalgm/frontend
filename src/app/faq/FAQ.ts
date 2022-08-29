export class FAQ{
       
    
    question:any;
    solution:any;
    customername:any;
    customeremail:any;
    querydes:any;
    constructor(solution:any,question:any,customername:any,customeremail:any,querydes:any){
        this.solution=solution;
        this.question=question;
        this.customeremail=customeremail;
        this.customername=customername;
        this.querydes=querydes;
    }
}