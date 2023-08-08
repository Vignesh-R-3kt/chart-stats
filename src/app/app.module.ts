import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { HomeComponent } from './components/home/home.component';
import { CalenderComponent } from './components/calender/calender.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProgressComponent } from './components/progress/progress.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GoogleComponent } from './components/projects/google/google.component';
import { AmazonComponent } from './components/projects/amazon/amazon.component';
import { FacebookComponent } from './components/projects/facebook/facebook.component';
import { AirbnbComponent } from './components/projects/airbnb/airbnb.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainBodyComponent,
    CardComponentComponent,
    HomeComponent,
    CalenderComponent,
    MessagesComponent,
    ProjectsComponent,
    ProgressComponent,
    GoalsComponent,
    SettingsComponent,
    GoogleComponent,
    AmazonComponent,
    FacebookComponent,
    AirbnbComponent,
    ProfileScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
