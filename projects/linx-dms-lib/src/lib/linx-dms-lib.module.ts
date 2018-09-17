import { NgModule } from '@angular/core';
import { LinxDmsLibComponent } from './linx-dms-lib.component';
import { LibRoutingModule } from './linx-dms-lib-routing.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
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
