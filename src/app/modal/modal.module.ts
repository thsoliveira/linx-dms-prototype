import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { ModalContentComponent } from './modal-content/modal-content.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalRoutingModule
    ],
    declarations: [
        ModalComponent,
        ModalContentComponent
    ],
})
export class ModalModule { }
