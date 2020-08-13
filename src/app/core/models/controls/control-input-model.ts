import {ControlBaseModel} from './control-base-model';

export class ControlInputModel extends ControlBaseModel<string> {
  controlType = 'input';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
