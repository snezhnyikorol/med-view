import {Component, Input, OnInit} from '@angular/core';
import {PersonGeneralInfoModel} from '@models/person-general-info.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-patient-row]',
  templateUrl: './patient-row.component.html',
  styleUrls: ['./patient-row.component.scss']
})
export class PatientRowComponent implements OnInit {
  @Input()
  user: PersonGeneralInfoModel;
  fullName: string;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.http.getUsers());
  }

  getFullName(firstName: string, middleName: string, lastName: string): string {
    let fullName = firstName;
    if (middleName) {
      fullName += ' ';
      fullName += middleName;
    }
    fullName += ' ';
    fullName += lastName;
    return fullName;
  }
}
