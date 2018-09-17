import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { Error404Component } from '../pages/error404/error404.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalComponent } from './modal.component';



const modalRoutes: Routes = [
    {
        path: '',
        component: ModalComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        component: ModalContentComponent
                    }
                ]
            }
        ]
    }
    /* { path: 'about', component: AboutComponent },
    { path: 'content', component: ModalContentComponent }, */
    /* { path: '', redirectTo: '/about', pathMatch: 'full'}, */
    /* { path: '**', component: Error404Component} */
];
@NgModule({
    imports: [RouterModule.forChild(modalRoutes)],
    exports: [RouterModule]
})
export class ModalRoutingModule { }
