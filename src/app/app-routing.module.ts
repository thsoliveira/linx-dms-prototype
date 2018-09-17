import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { ModalComponent } from './modal/modal.component';
import { ModalContentComponent } from './modal/modal-content/modal-content.component';

// const routes: Routes = [
//   { path: 'modal', component: ModalComponent },
//   { path: 'about/:id', component: AboutComponent },
//   { path: '', redirectTo: '/modal', pathMatch: 'full' },
//   { path: '**', component: Error404Component }
// ];

const appRoutes: Routes = [
  {
    path: 'modal',
    component: ModalComponent,
    children: [
      {
        path: 'content',
        component: ModalContentComponent,
        /* loadChildren: './modal/modal-content/modal-content.component.html' */
      },
      {
        path: 'about',
        component: AboutComponent,
      }
    ]
  },
  /* { path: 'about', component: AboutComponent } */
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
