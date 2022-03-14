import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule } from 'carbon-components-angular';

import Notification16 from '@carbon/icons/es/notification/16.js';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
