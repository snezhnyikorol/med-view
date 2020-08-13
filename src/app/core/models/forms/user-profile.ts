import {ControlBaseModel} from '../controls/control-base-model';
import {ControlInputModel} from '../controls/control-input-model';

export const userProfileMetadata: ControlBaseModel<string>[] = [
  new ControlInputModel({
    key: 'first_name',
    label: 'First name',
    value: 'Bombasto',
    required: true,
    order: 2
  }),

  new ControlInputModel({
    key: 'last_name',
    label: 'Last name',
    value: 'Bombasto',
    required: true,
    order: 3
  }),

  new ControlInputModel({
    key: 'email',
    label: 'Email',
    type: 'email',
    order: 4
  }),

  new ControlInputModel({
    key: 'login',
    label: 'Login',
    order: 1
  }),

  new ControlInputModel({
    key: 'phone',
    label: 'Phone',
    order: 5
  }),

  new ControlInputModel({
    key: 'birthday',
    label: 'Birthday',
    order: 6
  })
];
