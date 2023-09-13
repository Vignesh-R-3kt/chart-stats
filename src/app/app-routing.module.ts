import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthLoginGuard } from './services/auth-login.service';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate:[AuthLoginGuard] },
  {
    path: "main-body",
    component: DashboardComponent,
    loadChildren: () =>
      import("./components/main-body/main-body.module").then(
        ({ MainBodyModule }) => MainBodyModule,
      ),
    canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
