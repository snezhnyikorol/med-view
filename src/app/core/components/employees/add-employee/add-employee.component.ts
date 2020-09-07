import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {addEmployeeFormMetadata} from '@models/forms/add-employee-form';
import {FormControl, FormGroup} from '@angular/forms';
import {FormControlService} from '../../../services/form-control.service';
import {ControlBaseModel} from '@models/controls/control-base-model';
import {FormBaseModel} from '@models/forms/form-base.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @Input() name;
  active = 'top';
  formModel: FormBaseModel;
  form: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private fcs: FormControlService,
  ) { }

  ngOnInit(): void {
    this.formModel = addEmployeeFormMetadata;
    this.form = this.fcs.toMainFormObj(this.formModel);
    console.log(this.form);
    this.active = addEmployeeFormMetadata.groups['generalInfo'].name;
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
