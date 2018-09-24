import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinxDmsLibComponent } from './linx-dms-lib.component';
import { ModalComponent } from './modal/modal.component';
import { ContentComponent } from './modal/content/content.component';
import { PagesComponent } from './pages/pages.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';

const libRoutes: Routes = [
  {
    path: 'lib',
    component: LinxDmsLibComponent,
    children: [
      {
        path: 'modal',
        component: ModalComponent,
        children: [
          {
            path: 'content',
            // loadChildren: './content/content.module#ContentModule',
            component: ContentComponent,
            children: [
              {
                path: 'pages',
                component: PagesComponent,
                // loadChildren: '../../pages/pages.module#PagesModule',
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
                ],
              }
            ]
          },
        ]
      },
    ]
  },
  {
      path: '',
      redirectTo: 'lib',
      pathMatch: 'full'
  }
];

// const libRoutes: Routes = [
//   {
//     path: 'lib',
//     component: LinxDmsLibComponent,
//     children: [
//       {
//         path: 'modal',
//         loadChildren: './modal/modal.module#ModalModule',
//       },
//       {
//         path: 'pages',
//         loadChildren: './pages/pages.module#PagesModule'
//       },
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/lib',
//     pathMatch: 'full'
//   },
// ];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(
      libRoutes
    )
  ],
})
export class LibRoutingModule { }
