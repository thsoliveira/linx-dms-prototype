import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const libRoutes: Routes = [
  {
    path: 'modal',
    loadChildren: './modal/modal.module#ModalModule',
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(
      libRoutes,
      {
        enableTracing: true, // debugging
      }
    )
  ],
})
export class LibRoutingModule { }
