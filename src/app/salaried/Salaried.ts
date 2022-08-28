export class Salaried
{
    srNo:number = 0;
    retirementAge: number = 0;
    monthlySalary: number = 0;
    organization:string = "";

    constructor(srNo:number,retirementAge:number,monthlySalary:number,organization:string){

        this.srNo = srNo;
        this.retirementAge = retirementAge
        this.monthlySalary = monthlySalary;
        this.organization = organization;
    }
}