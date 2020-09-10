import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    themeSystem: 'bootstrap',
    headerToolbar: {
      start: '',
      center: 'title',
      end: 'dayGridMonth,dayGridWeek today prev,next'
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
