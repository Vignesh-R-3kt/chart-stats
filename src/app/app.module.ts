import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
