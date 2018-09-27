import { NgModule } from '@angular/core';
import { LinxDmsLibComponent } from './linx-dms-lib.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from './modal/modal.module';
import { LibRoutingModule } from './linx-dms-lib-routing.module';
import { PagesModule } from './pages/pages.module';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
@NgModule({
  imports: [
    ModalModule,
    PagesModule,
    McBreadcrumbsModule.forRoot(),
    LibRoutingModule
  ],
  declarations: [
    LinxDmsLibComponent,
  ],
  exports: [
    LinxDmsLibComponent,
  ]
})
export class LinxDmsLibModule { }
