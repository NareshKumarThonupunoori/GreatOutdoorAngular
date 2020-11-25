import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/add-customer-service.service';
import { Customer } from 'src/app/model/Customer';
import { Address } from 'src/app/model/Address';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent  {

  constructor(private service:CustomerService) { }

  
  customers:any;
  customerById: any;
  id:any;
  address:Address=new Address(0,"","","","",0);
  customer:Customer=new Customer("", 0, "", this.address,"");
  
  
  public getAllCustomers(){
    let resp = this.service.getAllCustomers();
    resp.subscribe((data)=>this.customers = data);
  }

  public getCustomerById(){
    let resp = this.service.getCustomerById(this.id);
    resp.subscribe((data)=>this.customerById= data);
  }

  public deleteCustomer(id:number){
    let resp = this.service.deleteCustomer(id);
    resp.subscribe((data:any)=>this.customers=data);
  }

}
