import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {ControlBaseModel} from '@model/controls/control-base-model';
import {ControlInputModel} from '@model/controls/control-input-model';
import {FormGroup} from '@angular/forms';
import {FormControlService} from '../form-control.service';
import {Router} from '@angular/router';
import {userProfileMetadata} from '@model/forms/user-profile';
import {AuthService} from '../auth/auth.service';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  controls: ControlBaseModel<string>[] = [
    new ControlInputModel({
      key: 'username',
      required: true,
      placeholder: 'email/phone'
    }),
    new ControlInputModel({
      key: 'password',
      required: true,
      type: 'password',
      placeholder: 'password'
    }),
  ];
  permissions$;
  form: FormGroup;

  constructor(
    private fcs: FormControlService,
    private auth: AuthService,
  ) {  }

  ngOnInit(): void {
    this.form = this.fcs.toFormGroup(this.controls);
  }

  onSubmit() {
    // this.http.auth(this.form.getRawValue()).subscribe((data: any) => {
    //   console.log(data);
    //   localStorage.setItem('token', data.data.token);
    //   localStorage.setItem('expires', data.data.expires);
    //   // this.router.navigate(['user/add', {controls: JSON.stringify(userProfileMetadata)}]);
    //   // this.http.getUsers(1).subscribe(data => console.log(data));
    // }, err => console.log(err));
    this.auth.login(this.form.getRawValue());
  }
}
