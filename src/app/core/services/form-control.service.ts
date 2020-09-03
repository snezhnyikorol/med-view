import { Injectable } from '@angular/core';
import {ControlBaseModel} from '@models/controls/control-base-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBaseModel} from '@models/forms/form-base.model';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toMainFrom(formModel: FormBaseModel) {
    const form = {};
    formModel.groups.forEach(el => form[el.name] = this.toFormGroup(el.controls));
    return new FormGroup(form);
  }

  toFormGroup(controls: ControlBaseModel<string>[]) {
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });

    return new FormGroup(group);
  }
}
