import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register/register.component';
import { AuthGuard } from './core/auth.guard';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


export const rootRoutes: Routes = [
  { path: '', component: RegisterComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
