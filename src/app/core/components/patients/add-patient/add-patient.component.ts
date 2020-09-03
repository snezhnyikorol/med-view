import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {addClientFormMetadata} from '@models/forms/add-client-form';
import {FormControl, FormGroup} from '@angular/forms';
import {FormControlService} from '../../../services/form-control.service';
import {ControlBaseModel} from '@models/controls/control-base-model';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  @Input() name;
  active = 'top';
  controls: Array<ControlBaseModel<string>>;
  form: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private fcs: FormControlService,
  ) { }

  ngOnInit(): void {
    this.controls = addClientFormMetadata;
    this.form = this.fcs.toFormGroup(this.controls);
  }

  onSubmit() {
    const res = this.form.getRawValue();
    console.log(res);
    // res.role = 'client';
    // this.payload = JSON.stringify(res);
    // console.log(this.payload);
    // this.http.addUser(res).subscribe(resp => console.log(resp));
  }

}
