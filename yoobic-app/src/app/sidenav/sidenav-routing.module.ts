import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavPage } from './sidenav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: SidenavPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'heroes',
        loadChildren: () => import('../heroes/heroes.module').then(m => m.HeroesPageModule)
      },
      {
        path: 'hero',
        loadChildren: () => import('../hero/hero.module').then(m => m.HeroPageModule)
      },
      {
        path:' ',
        redirectTo: 'nav/login',
        pathMatch: 'full'
      }

    ]
  },
  {
    path:' ',
    redirectTo: 'nav/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavPageRoutingModule {}
