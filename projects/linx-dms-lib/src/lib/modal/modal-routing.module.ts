import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal.component';
import { ContentComponent } from './content/content.component';
import { PagesComponent } from '../pages/pages.component';
import { PageOneComponent } from '../pages/page-one/page-one.component';

const modalRoutes: Routes = [
    {
        path: 'modal',
        component: ModalComponent,
        children: [
            {
                path: 'content',
                // loadChildren: './content/content.module#ContentModule',
                component: ContentComponent,
            },
        ]
    },
    /* {
        path: '',
        redirectTo: './modal',
        pathMatch: 'full'
    } */
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
