import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule} from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule} from '../shared/shared.module';
import { PromozioniComponent } from './components/promozioni/promozioni.component';
import { PromozionComponent } from './components/promozion/promozion.component';
@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,
        PromozioniComponent,
        PromozionComponent,
    ],
    imports: [
        MaterialModule,
        SharedModule,
        CommonModule,
        HomeRoutingModule

    ]
})

export class HomeModule {

}
