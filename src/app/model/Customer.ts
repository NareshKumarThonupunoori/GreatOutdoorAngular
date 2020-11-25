export class Customer{
    
        customerName:string;
        mobileNo:string;
        email:string;
        role:string;
        
        constructor(customerName:string, mobileNumber:string, email:string, role:string){
            this.customerName = customerName;
            this.mobileNo = mobileNumber;
            this.email = email;
            this.role=role;
           
        }
    }