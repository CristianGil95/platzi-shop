import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '.././material/material.module';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductsComponent } from './components/form-product/form-products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';






@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductsListComponent,
    FormProductsComponent,
    ProductEditComponent,
    BreadcrumbsComponent],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
