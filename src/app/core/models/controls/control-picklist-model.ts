import {ControlBaseModel} from './control-base-model';

export class ControlPicklistModel extends ControlBaseModel<string> {
  controlType = 'picklist';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
