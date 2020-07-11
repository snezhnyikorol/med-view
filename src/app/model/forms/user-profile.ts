import {ControlBaseModel} from '@model/controls/control-base-model';
import {ControlInputModel} from '@model/controls/control-input-model';

export const userProfileMetadata: ControlBaseModel<string>[] = [
  new ControlInputModel({
    key: 'firstName',
    label: 'First name',
    value: 'Bombasto',
    required: true,
    order: 1
  }),

  new ControlInputModel({
    key: 'emailAddress',
    label: 'Email',
    type: 'email',
    order: 2
  })
];
