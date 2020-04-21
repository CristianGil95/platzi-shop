import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatBadgeModule} from '@angular/material/badge';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatChipsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
    MatGridListModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [
    MatTabsModule,
    MatChipsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
    MatGridListModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
