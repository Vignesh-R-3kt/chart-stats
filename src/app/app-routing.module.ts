import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalenderComponent } from './components/calender/calender.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProgressComponent } from './components/progress/progress.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "calender", component: CalenderComponent },
  { path: "messages", component: MessagesComponent },
  { path: "projects", component: ProjectsComponent, },
  { path: "progress", component: ProgressComponent },
  { path: "goals", component: GoalsComponent },
  { path: "settings", component: SettingsComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
