import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './../material.module';
import { LoggedRoutingModule } from './logged-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EmployeeComponent } from './components/employee/employee.component';

import { FormExampleComponent } from './components/form-example/form-example.component';
//form reactive
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//new components
import { LoginComponent } from './components/login/login.component';
import { RegiterComponent } from './components/regiter/regiter.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent, DialogOverviewExampleDialog } from './components/restaurant/restaurant.component';



@NgModule({
  declarations: [
    SideNavComponent,
    ToolbarComponent,
    EmployeeComponent,
    DialogOverviewExampleDialog,
    FormExampleComponent,FooterComponent, LoginComponent, RegiterComponent, HomeComponent, RestaurantComponent],

  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [DialogOverviewExampleDialog]
})
export class LoggedModule { }
