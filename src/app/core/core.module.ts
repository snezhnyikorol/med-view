import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {ControlsModule} from '../shared/components/controls/controls.module';
import {TokenInterceptor} from './auth/token.interceptor';
import {ErrorInterceptor} from './auth/error.interceptor';
import { TestComponent } from './test/test.component';
import { AuthorizedContainerComponent } from './components/authorized-container/authorized-container.component';
import {ComponentsModule} from '../shared/components/components.module';
import {RouterModule} from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientRowComponent } from './components/patients/patient-row/patient-row.component';
import {SharedModule} from '@shared/shared.module';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeRowComponent } from './components/employees/employee-row/employee-row.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { PatientComponent } from './components/patient/patient.component';
import {IconsModule} from '@shared/icons/icons.module';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import bootstrapPlugin from '@fullcalendar/bootstrap';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  bootstrapPlugin
]);


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [LoginComponent, TestComponent, AuthorizedContainerComponent, AdminDashboardComponent, PatientsComponent, PatientRowComponent, AddPatientComponent, EmployeesComponent, EmployeeRowComponent, AddEmployeeComponent, PatientComponent],
    exports: [
        LoginComponent,
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ControlsModule,
    ComponentsModule,
    RouterModule,
    NgbNavModule,
    IconsModule,
    FullCalendarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    /*,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
    */
  ]
})
export class CoreModule { }
