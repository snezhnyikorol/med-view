import {ControlBaseModel} from '@models/controls/control-base-model';

export interface FormGroupModel {
  name: string;
  title: string;
  controls: {[key: string]: ControlBaseModel<any>};
}
