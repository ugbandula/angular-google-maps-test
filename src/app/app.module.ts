import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventDetailsDialog} from './event-details/event-details.component';
import {MaterialsModule} from './material-module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EventDetailsDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
