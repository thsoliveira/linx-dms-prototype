import { NgModule } from '@angular/core';
import { LinxDmsLibComponent } from './linx-dms-lib.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from './modal/modal.module'
import { LibRoutingModule } from './linx-dms-lib-routing.module';

@NgModule({
  imports: [
    //RouterModule.forChild([{ path: '', component: LinxDmsLibComponent }]),
    ModalModule,
    LibRoutingModule
  ],
  declarations: [
    LinxDmsLibComponent,
    PagesComponent
  ],
  exports: [
    LinxDmsLibComponent,
    PagesComponent
  ]
})
export class LinxDmsLibModule { }
