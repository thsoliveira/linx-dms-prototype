import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ContentComponent } from '../pages/content/content.component';
import { AboutComponent } from '../pages/about/about.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalRoutingModule
    ],
    declarations: [
        ModalComponent,
        ModalContentComponent,
        ContentComponent,
        AboutComponent
    ],
})
export class ModalModule { }
