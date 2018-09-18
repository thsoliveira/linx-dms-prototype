import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from '../content/content.component';
import { PagesModule } from '../../pages/pages.module';
import { ContentRoutingModule } from './content-routing.module';
import { PageOneComponent } from '../../pages/page-one/page-one.component';
import { PageTwoComponent } from '../../pages/page-two/page-two.component';
import { PageThreeComponent } from '../../pages/page-three/page-three.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PagesModule,
        ContentRoutingModule
    ],
    declarations: [
        ContentComponent
    ],
})
export class ContentModule { }
