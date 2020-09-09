import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppRoutingModule} from "../../app-routing.module";
import {IconsModule} from "@shared/icons/icons.module";
import { HeaderComponent } from './header/header.component';



@NgModule({
    declarations: [SidebarComponent, HeaderComponent],
    exports: [
        SidebarComponent,
        HeaderComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    IconsModule
  ]
})
export class ComponentsModule { }
