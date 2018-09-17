import { NgModule } from '@angular/core';
import { LinxDmsLibComponent } from './linx-dms-lib.component';
import { PagesComponent } from './pages/pages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '', component: LinxDmsLibComponent }])
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
