import { Injectable } from '@angular/core';
import {ControlBaseModel} from '@models/controls/control-base-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBaseModel} from '@models/forms/form-base.model';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toMainFormObj(formModel: FormBaseModel) {
    const form = {};
    Object.keys(formModel.groups).forEach(key => form[formModel.groups[key].name] = this.toFormGroupObj(formModel.groups[key].controls));
    return new FormGroup(form);
  }

  // toMainFrom(controls: ControlBaseModel<any>[]) {
  //   const form = {};
  //   controls.forEach(el => form[el.key] = this.toFormGroup(el));
  //   return new FormGroup(form);
  // }

  toFormGroup(controls: ControlBaseModel<string>[]) {
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });

    return new FormGroup(group);
  }

  toFormGroupObj(controls) {
    const group: any = {};
    Object.keys(controls).forEach(key => {
      group[key] = controls[key].required ? new FormControl(controls[key].value || '', Validators.required)
        : new FormControl(controls[key].value || '');
    });

    return new FormGroup(group);
  }
}
