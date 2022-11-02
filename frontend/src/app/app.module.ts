import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { DocumentComponent } from './document/document.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from "angular-progress-bar";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    BrowserAnimationsModule,
    ProgressBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
