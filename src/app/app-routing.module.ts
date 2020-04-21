import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DemoComponent} from './demo/demo.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LayoutComponent} from './layout/layout.component';
import { AdminGuard} from './admin.guard';
import { PreloadService } from './core/services/preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
          data: { preload: true }
        },
        {
          path: 'products',
          loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
          data: { preload: true }
        },
        {
          path: 'contact',
          loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
        },
        {
          path: 'order',
          loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
        },

        // {
        //   path: 'admin',
        //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        // },
      ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes, {
  preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
