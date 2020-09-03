import {Component, Input, OnInit} from '@angular/core';
import {ControlBaseModel} from '@models/controls/control-base-model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Input() control: ControlBaseModel<string>;
  @Input() form: FormGroup;
  get isValid() {return this.form.controls[this.control.key].valid; }
  constructor() { }

  ngOnInit(): void {
  }

}
