import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        ContactRoutingModule
    ]
})

export class ContactModule {

}
