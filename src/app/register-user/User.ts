export class User{ 
 
    
    firstName:string="";
    lastName:string="";
    middleName:string="";
    email:string="";
    password:string="";
    phone!:number;
    dob:string="";
    gender:string="";
    nationality:string="";
    aadharNo!:number;
    panNo!:string;
    

    constructor(firstName:string,lastName:string,middleName:string,email:string,password:string,
                 phone:number,dob:string,gender:string,
                 nationality:string,aadharNo:number,panNo:string)
    {
       
        this.firstName=firstName;
        this.lastName=lastName;
        this.middleName=middleName;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.dob=dob;
        this.gender=gender;
        this.nationality=nationality;
        this.aadharNo=aadharNo;
        this.panNo=panNo;

        
    }
}