import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PersonGeneralInfoModel} from '@models/person-general-info.model';
import {HttpService} from '../../services/http.service';
import {AddEmployeeComponent} from './add-employee/add-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private http: HttpService,
    private modalService: NgbModal
  ) { }

  users: Array<PersonGeneralInfoModel> = Array(0);  // Must be defined as Input parameter or fetched on init
  closeResult = '';

  ngOnInit(): void {
    const user: PersonGeneralInfoModel = {
      id: 1,
      photo: '//style.anu.edu.au/_anu/4/images/placeholders/person.png',
      firstName: 'Name',
      middleName: '',
      lastName: 'Surname',
      birthday: '',
      gender: 'Male',
      tags: [],
      maritalStatus: 'Single',
      contact: {
        phone: ['11111'],
        email: ['test@email.com'],
        messengerList: [],
        mobile: [{
          isMainPhone: true,
          phone: '',
          note: '',
        }],
      },
      address: {
        registration: {
          houseNumber: '',
          apartmentNumber: '',
          locality: '',
          country: '',
          postIndex: '',
          region: '',
          street: '',
        },
        actual: {
          houseNumber: '',
          apartmentNumber: '',
          locality: '',
          country: '',
          postIndex: '',
          region: '',
          street: '',
        }
      }
    };
    for (let i = 0; i < 15; i++) {
      this.users.push(user);
      this.users[i].id = i;
    }
    // this.http.getUsers().subscribe((res) => console.log(res));
  }

  open() {
    const modalRef = this.modalService.open(AddEmployeeComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }
}