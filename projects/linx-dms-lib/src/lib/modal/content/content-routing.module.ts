import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { PagesComponent } from '../../pages/pages.component';
import { PageOneComponent } from '../../pages/page-one/page-one.component';
import { PageTwoComponent } from '../../pages/page-two/page-two.component';
import { PageThreeComponent } from '../../pages/page-three/page-three.component';


const contentRoutes: Routes = [
    {
        path: 'content',
        component: ContentComponent,
        /* children: [
            {
                path: 'pages',
                // loadChildren: '../../pages/pages.module#PagesModule ',
                component: PagesComponent,
                children: [
                    {
                        path: 'pageOne',
                        component: PageOneComponent
                    },
                    {
                        path: 'pageTwo',
                        component: PageTwoComponent
                    },
                    {
                        path: 'pageThree',
                        component: PageThreeComponent
                    },
                ]
            },
        ] */
    },
    /* {
        path: '',
        redirectTo: './modal',
        pathMatch: 'full'
    } */
];
@NgModule({
    imports: [
        RouterModule.forChild(contentRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ContentRoutingModule { }
