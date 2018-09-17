import { NgModule } from '@angular/core';
import { LinxDmsPrototypeProjectComponent } from './linx-dms-prototype-project.component';
import { ModalComponent } from './modal/modal.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PagesComponent } from './pages/pages.component';
import { LibRoutingModule } from './linx-dms-prototype-project-routing.module';
import { PagesModule } from './pages/pages.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [
    LibRoutingModule,
    PagesModule,
    ModalModule
  ],
  declarations: [
    ModalComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PagesComponent,
    LinxDmsPrototypeProjectComponent,
  ],
  exports: [
    LinxDmsPrototypeProjectComponent
  ]
})
export class LinxDmsPrototypeProjectModule { }
