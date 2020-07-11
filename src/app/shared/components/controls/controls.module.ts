import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlInputComponent } from './control-input/control-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ControlComponent } from './control/control.component';



@NgModule({
  declarations: [ControlInputComponent, ControlComponent],
  exports: [
    ControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ControlsModule { }
