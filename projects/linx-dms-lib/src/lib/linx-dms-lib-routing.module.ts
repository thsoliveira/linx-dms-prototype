import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinxDmsLibComponent } from './linx-dms-lib.component';
import { ModalComponent } from './modal/modal.component';

const libRoutes: Routes = [
  {
    path: 'lib',
    component: LinxDmsLibComponent,
    children: [
      {
        path: 'modal',
        loadChildren: './modal/modal.module#ModalModule'
      },
      {
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/lib',
    pathMatch: 'full'
  }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(
      libRoutes
    )
  ],
})
export class LibRoutingModule { }
