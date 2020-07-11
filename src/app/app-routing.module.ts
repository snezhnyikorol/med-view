import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/login/login.component';
import {ProfileFormComponent} from './core/profile-form/profile-form.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'user/add',
    component: ProfileFormComponent
  }, {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
