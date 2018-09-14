import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { Error404Component } from '../pages/error404/error404.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

// const routes: Routes = [
//   { path: 'modal', component: ModalComponent },
//   { path: 'about/:id', component: AboutComponent },
//   { path: '', redirectTo: '/modal', pathMatch: 'full' },
//   { path: '**', component: Error404Component }
// ];

const modalRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'content', component: ModalContentComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full'},
    { path: '**', component: Error404Component}
];
@NgModule({
    imports: [RouterModule.forChild(modalRoutes)],
    exports: [RouterModule]
})
export class ModalRoutingModule { }
