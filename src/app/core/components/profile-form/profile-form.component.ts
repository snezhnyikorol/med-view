import {Component, Input, OnInit} from '@angular/core';
import {ControlBaseModel} from '@models/controls/control-base-model';
import {FormGroup} from '@angular/forms';
import {FormControlService} from '../../services/form-control.service';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../services/http.service';

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
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.controls = JSON.parse(this.route.snapshot.paramMap.get('controls'));
    this.form = this.fcs.toFormGroup(this.controls);
    // this.http.getUser(2).subscribe(res => console.log(res));
  }

  onSubmit() {
    const res = this.form.getRawValue();
    res.role = 'client';
    // this.payload = JSON.stringify(res);
    // console.log(this.payload);
    this.http.addUser(res).subscribe(resp => console.log(resp));
  }
}
