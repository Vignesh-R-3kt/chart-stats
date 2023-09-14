import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CalenderComponent } from '../calender/calender.component';
import { MessagesComponent } from '../messages/messages.component';
import { ProgressComponent } from '../progress/progress.component';
import { GoalsComponent } from '../goals/goals.component';
import { SettingsComponent } from '../settings/settings.component';
import { ProfileScreenComponent } from '../profile-screen/profile-screen.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { SummaryComponent } from '../project-details/summary/summary.component';
import { TeamComponent } from '../project-details/team/team.component';
import { EstimatesComponent } from '../project-details/estimates/estimates.component';
import { TrackingComponent } from '../project-details/tracking/tracking.component';
import { ExpenseComponent } from '../project-details/expense/expense.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "calender", component: CalenderComponent },
  { path: "messages", component: MessagesComponent },
  {
    path: "projects", children: [
      {
        path: ":id", component: ProjectDetailsComponent, children: [
          { path: "", redirectTo: "summary", pathMatch: "full" },
          { path: "summary", component: SummaryComponent },
          { path: "team", component: TeamComponent },
          { path: "estimates", component: EstimatesComponent },
          { path: "tracking", component: TrackingComponent },
          { path: "expense", component: ExpenseComponent },
        ]
      }
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
