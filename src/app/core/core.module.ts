import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ControlsModule} from '@shared/components/controls/controls.module';



@NgModule({
  declarations: [LoginComponent, ProfileFormComponent],
    exports: [
        LoginComponent,
        ProfileFormComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ControlsModule
  ]
})
export class CoreModule { }
