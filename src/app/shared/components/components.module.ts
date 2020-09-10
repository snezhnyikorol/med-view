import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppRoutingModule} from "../../app-routing.module";
import {IconsModule} from "@shared/icons/icons.module";
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table/table-row/table-row.component';



@NgModule({
    declarations: [SidebarComponent, HeaderComponent, TableComponent, TableRowComponent],
    exports: [
        SidebarComponent,
        HeaderComponent,
        TableComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    IconsModule
  ]
})
export class ComponentsModule { }
