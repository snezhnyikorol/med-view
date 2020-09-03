import { Component, OnInit, Input } from '@angular/core';
import {PersonGeneralInfoModel} from '@models/person-general-info.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-employee-row]',
  templateUrl: './employee-row.component.html',
  styleUrls: ['./employee-row.component.scss']
})
export class EmployeeRowComponent implements OnInit {
  @Input()
  user: PersonGeneralInfoModel;

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
