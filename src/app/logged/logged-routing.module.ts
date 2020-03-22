import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegiterComponent } from './components/regiter/regiter.component';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'regiter',
        component: RegiterComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'restaurant',
        component: RestaurantComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LoggedRoutingModule { }
