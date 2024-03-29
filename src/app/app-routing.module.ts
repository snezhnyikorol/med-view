import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/components/login/login.component';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {TestComponent} from './core/test/test.component';
import {AuthorizedContainerComponent} from './core/components/authorized-container/authorized-container.component';
import {AuthGuard} from './core/auth/auth.guard';
import {PatientsComponent} from './core/components/patients/patients.component';
import {EmployeesComponent} from './core/components/employees/employees.component';
import {PatientComponent} from "./core/components/patient/patient.component";
import {StockComponent} from "./core/components/stock/stock.component";
import {EmployeeComponent} from './core/components/employee/employee.component';
import {CalendarComponent} from './core/calendar/calendar.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'app',
    // canActivate: [AuthGuard],
    component: AuthorizedContainerComponent,
    children: [
      {
        path: 'calendar',
        component: CalendarComponent,

      },
      {
        path: 'patients',
        component: PatientsComponent,

      },
      {
        path: 'employees',
        component: EmployeesComponent,

      },
      {
        path: 'patient/:id',
        component: PatientComponent
      },
      {
        path: 'employee/:id',
        component: EmployeeComponent,

      },
      {
        path: 'stock',
        component: StockComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app/stock',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
