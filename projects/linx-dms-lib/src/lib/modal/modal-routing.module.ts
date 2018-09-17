import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal.component';
import { ContentComponent } from './content/content.component';




const modalRoutes: Routes = [
    {
        path: 'modal',
        component: ModalComponent,
        children: [
            {
                path: 'content',
                component: ContentComponent
            }
        ]
    }
    /* { path: 'about', component: AboutComponent },
    { path: 'content', component: ModalContentComponent }, */
    /* { path: '', redirectTo: '/about', pathMatch: 'full'}, */
    /* { path: '**', component: Error404Component} */
];
@NgModule({
    imports: [
        RouterModule.forChild(modalRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ModalRoutingModule { }
