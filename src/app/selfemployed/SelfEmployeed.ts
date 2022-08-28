export class SelfEmployed {
    srNo: number = 0;
    turnover: number = 0;
    natureOfBusiness: string = "";

    constructor(srNo: number, turnover: number, natureOfBusiness: string) {

        this.srNo = srNo;
        this.turnover = turnover;

        this.natureOfBusiness = natureOfBusiness;

    }
}