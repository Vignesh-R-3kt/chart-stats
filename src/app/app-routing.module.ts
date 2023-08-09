import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    loadChildren: () =>
      import("./components/main-body/main-body.module").then(
        ({ MainBodyModule }) => MainBodyModule,
      ),
    path: "main-body",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
