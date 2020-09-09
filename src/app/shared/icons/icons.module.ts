import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { HelpCircle, Aperture, Box, Calendar, Inbox, User, Folder, Clipboard, Package, ShoppingCart } from 'angular-feather/icons';

const icons = {
  Aperture,
  HelpCircle,
  Box,
  Calendar,
  Inbox,
  User,
  Folder,
  Clipboard,
  Package,
  ShoppingCart
};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
