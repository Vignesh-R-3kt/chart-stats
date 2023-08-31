import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainBodyRoutingModule } from './main-body-routing.module';
import { HomeComponent } from '../home/home.component';
import { CalenderComponent } from '../calender/calender.component';
import { MessagesComponent } from '../messages/messages.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProgressComponent } from '../progress/progress.component';
import { GoalsComponent } from '../goals/goals.component';
import { SettingsComponent } from '../settings/settings.component';
import { GoogleComponent } from '../projects/google/google.component';
import { AmazonComponent } from '../projects/amazon/amazon.component';
import { FacebookComponent } from '../projects/facebook/facebook.component';
import { AirbnbComponent } from '../projects/airbnb/airbnb.component';
import { ProfileScreenComponent } from '../profile-screen/profile-screen.component';


import { CardComponentComponent } from '../card-component/card-component.component';
import { HighchartsComponent } from '../highcharts/highcharts.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
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
    HighchartsComponent
  ],
  imports: [
    CommonModule,
    MainBodyRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MainBodyModule { }
