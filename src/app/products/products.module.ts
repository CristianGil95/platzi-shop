import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { ProductsContainer } from './container/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule} from '../shared/shared.module';
import { MaterialModule} from '../material/material.module';
import { ProductsSimilarComponent } from './components/products-similar/products-similar.component';

import { FiltersComponent } from './components/filters/filters.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductComponent,
        ProductsContainer,
        ProductsSimilarComponent,

        FiltersComponent,

        NavComponent,

        SearchComponent,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        SharedModule,
        CommonModule,
        ProductsRoutingModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ]
})
export class ProductsModule {

}
