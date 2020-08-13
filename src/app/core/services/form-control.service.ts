import { Injectable } from '@angular/core';
import {ControlBaseModel} from '@model/../models/controls/control-base-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(controls: ControlBaseModel<string>[]) {
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });

    return new FormGroup(group);
  }
}
