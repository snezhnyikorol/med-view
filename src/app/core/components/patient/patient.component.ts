import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PersonGeneralInfoModel} from '@models/person-general-info.model';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  active = 'details';
  id: string;
  user: PersonGeneralInfoModel;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    themeSystem: 'bootstrap',
    headerToolbar: {
      start: '',
      center: 'title',
      end: 'dayGridMonth,dayGridWeek today prev,next'
    },
  };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit( ): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = {
      id: 1,
      photo: '//style.anu.edu.au/_anu/4/images/placeholders/person.png',
      firstName: 'Name',
      middleName: 'Middle Name?',
      lastName: 'Surname',
      birthday: '00-00-0000',
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
  }

}
