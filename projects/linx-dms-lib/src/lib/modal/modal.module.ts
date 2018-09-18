import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { ContentComponent } from './content/content.component';
import { ContentModule } from './content/content.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalRoutingModule,
        ContentModule,
    ],
    declarations: [
        ModalComponent
    ],
})
export class ModalModule { }
