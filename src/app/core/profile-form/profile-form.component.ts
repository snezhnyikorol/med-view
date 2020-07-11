import {Component, Input, OnInit} from '@angular/core';
import {ControlBaseModel} from '@model/controls/control-base-model';
import {FormGroup} from '@angular/forms';
import {FormControlService} from '../form-control.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input() controls: ControlBaseModel<string>[] = [];
  form: FormGroup;
  payload = '';
  constructor(
    private fcs: FormControlService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.controls = JSON.parse(this.route.snapshot.paramMap.get('controls'));
    this.form = this.fcs.toFormGroup(this.controls);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
    console.log(this.payload);
  }
}
