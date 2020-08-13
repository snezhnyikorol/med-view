import { Component } from '@angular/core';
import {userProfileMetadata} from '@model/models/forms/user-profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'med-view';
  controls = userProfileMetadata;
}
