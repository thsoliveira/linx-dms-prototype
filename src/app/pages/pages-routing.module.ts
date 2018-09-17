import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { Error404Component } from '../pages/error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';

// const routes: Routes = [
//   { path: 'modal', component: ModalComponent },
//   { path: 'about/:id', component: AboutComponent },
//   { path: '', redirectTo: '/modal', pathMatch: 'full' },
//   { path: '**', component: Error404Component }
// ];

const pagesRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contentPages', component: ContentComponent},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];
@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ModalRoutingModule { }
