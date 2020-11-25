import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddCustomerComponent } from 'src/app/add-customer/add-customer.component';
import { CustomerDetailsComponent } from 'src/app/customer-details/customer-details.component';

const routes: Routes = [
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'list-product', component: ProductListComponent },
  {path:'add-customer',component:AddCustomerComponent},
  {path:'customerDetails',component:CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
