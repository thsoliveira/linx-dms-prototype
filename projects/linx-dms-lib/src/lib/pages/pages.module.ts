import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PagesRoutingModule
    ],
    declarations: [
        PagesComponent,
        PageOneComponent,
        PageTwoComponent,
        PageThreeComponent
    ],
    exports: [
        PageOneComponent,
        PageTwoComponent,
        PageThreeComponent
    ]
})
export class PagesModule { }
