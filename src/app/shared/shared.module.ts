import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { GroupProductsPipe } from './pipes/group-products.pipe';
import { TotalProductsPipe } from './pipes/total-products.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuicklinkModule } from 'ngx-quicklink';
@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    GroupProductsPipe,
    TotalProductsPipe,
    SearchPipe
  ],
  exports: [
    GroupProductsPipe,
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    TotalProductsPipe,
    SearchPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    QuicklinkModule
  ]
})
export class SharedModule { }
