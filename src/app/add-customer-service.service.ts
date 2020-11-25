import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  
    public addCustomer(customer:any){
      return this.http.post("http://localhost:8585/customers/add", customer, {responseType: 'text' as 'json'});
    }

    public getAllCustomers(){
      return this.http.get("http://localhost:8585/customer/allCustomers");
    }
  
    public getCustomerById(id:number){
      return this.http.get(`http://localhost:8585/customer/by/customerId/${id}`);
    }
  
    public deleteCustomer(id:number){
      return this.http.delete(`http://localhost:8585/customer/remove/${id}`);
    }
  
}
