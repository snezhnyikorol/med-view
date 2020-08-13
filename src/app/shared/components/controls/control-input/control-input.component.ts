import {Component, Input, OnInit} from '@angular/core';
import {ControlInputModel} from '@model/../../../../models/controls/control-input-model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-control-input',
  templateUrl: './control-input.component.html',
  styleUrls: ['./control-input.component.scss']
})
export class ControlInputComponent implements OnInit {
  @Input() control: ControlInputModel;
  @Input() form: FormGroup;
  // get isValid() {return this.form.controls[this.control.key].valid; }
  constructor() { }

  ngOnInit(): void {
  }

}
