export class ControlBaseModel<T> {
  value: T;
  key: string;
  label: string;
  placeholder: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  width: number;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    type?: string,
    width?: number
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.width = options.width || 12;
  }
}
