import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventDetailsDialog} from './event-details/event-details.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    EventDetailsDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
