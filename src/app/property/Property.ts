export class Property {
    propertyId:number=0;
    propertyName:string = "";
    propertyLocation:string="";
    amount:number = 0;

    constructor(propertyId:number,propertyName:string,propertyLocation:string,amount:number){

        this.propertyId = propertyId;
        this.propertyName=propertyName;
        this.propertyLocation=propertyLocation;
        this.amount=amount;

    }
}