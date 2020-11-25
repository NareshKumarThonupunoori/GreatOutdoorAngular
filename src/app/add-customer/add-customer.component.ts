import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/add-customer-service.service';
import { Customer } from 'src/app/model/Customer';
import { Address } from 'src/app/model/Address';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent  {
 

  customer1: Customer |undefined;
  address: Address |undefined;
  message:any;
    constructor(private service:CustomerService) { }
    addCustomer(myform: any){
      let data = myform.value;
      this.address = new Address(data.buildingNo, data.streetName, data.area, data.city, data.state, data.zip);
      console.log(this.address);
      this.customer1= new Customer(data.customerName,data.mobileNo,data.email,this.address,data.role);
    debugger;
    console.log(this.customer1);
        let resp = this.service.addCustomer(this.customer1);
        resp.subscribe((data:any) => this.message=data);
      }
    
}
