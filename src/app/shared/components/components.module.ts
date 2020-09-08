import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppRoutingModule} from "../../app-routing.module";
import {IconsModule} from "@shared/icons/icons.module";



@NgModule({
    declarations: [SidebarComponent],
    exports: [
        SidebarComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    IconsModule
  ]
})
export class ComponentsModule { }
