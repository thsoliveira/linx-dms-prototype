import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
/* import { ModalComponent } from './modal/modal.component';
import { ModalContentComponent } from './modal/modal-content/modal-content.component'; */
import { ContentComponent } from './pages/content/content.component';

// const routes: Routes = [
//   { path: 'modal', component: ModalComponent },
//   { path: 'about/:id', component: AboutComponent },
//   { path: '', redirectTo: '/modal', pathMatch: 'full' },
//   { path: '**', component: Error404Component }
// ];

const appRoutes: Routes = [
  {
    path: 'modal',
    loadChildren: './modal/modal.module#ModalModule',
  },
  {
    path: 'home',
    component: HomeComponent
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
      appRoutes,
      {
        enableTracing: true, // debugging
      }
    )
  ],
})
export class AppRoutingModule { }
