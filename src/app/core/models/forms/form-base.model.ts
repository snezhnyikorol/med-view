import {FormGroupModel} from '@models/forms/form-group.model';

export interface FormBaseModel {
  groups: {[key: string]: FormGroupModel};
}
