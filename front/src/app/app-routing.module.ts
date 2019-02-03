import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./authentication/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: "",
    children: [
      {path: "", redirectTo: "dashboard", pathMatch: "full"},
      {path: "dashboard", component: DashboardComponent}
    ]
  },
  {path: "login", component: LoginComponent},
];

@NgModule({
  // initializes the router and starts it, listening for browser location changes.
  // The method is called forRoot() because you configure the router at the application's root level.
  // supplies the service providers and directives needed for routing,
  // and performs the initial navigation based on the current browser URL.
  imports: [RouterModule.forRoot(routes)],
  // Exporting RouterModule makes router directives available for use in the AppModule components
  // that will need them.
  exports: [RouterModule]
})
export class AppRoutingModule { }
