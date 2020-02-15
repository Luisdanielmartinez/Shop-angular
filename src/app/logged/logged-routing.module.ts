import { LoginComponent } from './components/login/login.component';
import { RegiterComponent } from './components/regiter/regiter.component';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:SideNavComponent,
    children:[
      {
        path:'employee',
        component:EmployeeComponent
      },

      {
        path:'footer',
        component:FooterComponent
      },
      {
        path:'form',
        component:FormExampleComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'regiter',
        component:RegiterComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class LoggedRoutingModule { }
