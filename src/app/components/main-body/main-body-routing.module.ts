import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CalenderComponent } from '../calender/calender.component';
import { MessagesComponent } from '../messages/messages.component';
import { ProjectsComponent } from '../projects/projects.component';
import { GoogleComponent } from '../projects/google/google.component';
import { AmazonComponent } from '../projects/amazon/amazon.component';
import { FacebookComponent } from '../projects/facebook/facebook.component';
import { AirbnbComponent } from '../projects/airbnb/airbnb.component';
import { ProgressComponent } from '../progress/progress.component';
import { GoalsComponent } from '../goals/goals.component';
import { SettingsComponent } from '../settings/settings.component';
import { ProfileScreenComponent } from '../profile-screen/profile-screen.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "calender", component: CalenderComponent },
  { path: "messages", component: MessagesComponent },
  {
    path: "projects", component: ProjectsComponent, children: [
      { path: "", redirectTo: "google", pathMatch: "full" },
      { path: "google", component: GoogleComponent },
      { path: "amazon", component: AmazonComponent },
      { path: "facebook", component: FacebookComponent },
      { path: "airbnb", component: AirbnbComponent },
    ]
  },
  { path: "progress", component: ProgressComponent },
  { path: "goals", component: GoalsComponent },
  { path: "settings", component: SettingsComponent },
  { path: "profile", component: ProfileScreenComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainBodyRoutingModule { }
