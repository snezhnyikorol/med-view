import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ControlsModule} from '@shared/components/controls/controls.module';
import {TokenInterceptor} from './auth/token.interceptor';
import {ErrorInterceptor} from './auth/error.interceptor';
import { TestComponent } from './test/test.component';
import { AuthorizedContainerComponent } from './authorized-container/authorized-container.component';
import {ComponentsModule} from '@shared/components/components.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LoginComponent, ProfileFormComponent, TestComponent, AuthorizedContainerComponent],
    exports: [
        LoginComponent,
        ProfileFormComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ControlsModule,
    ComponentsModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
