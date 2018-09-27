import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ModalComponent } from './modal.component';
// import { ContentComponent } from './content/content.component';
// import { PagesComponent } from '../pages/pages.component';
// import { PageOneComponent } from '../pages/page-one/page-one.component';
// import { PageTwoComponent } from '../pages/page-two/page-two.component';
// import { PageThreeComponent } from '../pages/page-three/page-three.component';

// const modalRoutes: Routes = [
//     {
//         path: 'modal',
//         component: ModalComponent,
//         children: [
//             {
//                 path: 'content',
//                 // loadChildren: './content/content.module#ContentModule',
//                 component: ContentComponent,
//                 children: [
//                     {
//                         path: 'pages',
//                         component: PagesComponent,
//                         // loadChildren: '../../pages/pages.module#PagesModule',
//                         children: [
//                             {
//                                 path: 'pageOne',
//                                 component: PageOneComponent
//                             },
//                             {
//                                 path: 'pageTwo',
//                                 component: PageTwoComponent
//                             },
//                             {
//                                 path: 'pageThree',
//                                 component: PageThreeComponent
//                             },
//                         ],
//                     }
//                 ]
//             },
//         ]
//     },
//     /* {
//         path: '',
//         redirectTo: './modal',
//         pathMatch: 'full'
//     } */
// ];
@NgModule({
    imports: [
        // RouterModule.forChild(modalRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ModalRoutingModule { }
