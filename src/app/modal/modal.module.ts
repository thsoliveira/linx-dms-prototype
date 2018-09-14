import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalRoutingModule
    ],
    declarations: [
        ModalComponent
    ],
})
export class HeroesModule { }
