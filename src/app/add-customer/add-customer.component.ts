import { Component, OnInit } from '@angular/core';
import { AddCustomerService } from 'src/app/add-customer-service.service';
import { Customer } from 'src/app/model/Customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
 

  customer: Customer = new Customer("", "", "", "");
  message:any;
    constructor(private service:AddCustomerService) { }
    
      ngOnInit(): void {
      }
    
      public registerNow(){
        let resp = this.service.doRegistration(this.customer);
        resp.subscribe((data:any) => this.message=data);
      }
    
}
