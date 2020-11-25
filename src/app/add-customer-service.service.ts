import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerService {

  constructor(private http:HttpClient) { }
  
    public doRegistration(customer:any){
      return this.http.post("http://localhost:8085/customer/add", customer, {responseType: 'text' as 'json'});
    }
  
    public getCustomers(){
      return this.http.get("http://localhost:8085/customer/allCustomers");
    }
  
    public getCustomersById(id:number){
      return this.http.get(`http://localhost:8085/customer/by/${id}`);
    }
  
    public deleteCustomer(id:number){
      return this.http.delete(`http://localhost:8085/customer/delete/${id}`);
    }
}
