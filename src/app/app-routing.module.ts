import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login/login.guard';
//import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { MainComponent } from './main/main/main/main.component';
import { LoginComponent } from './user/login/login/login.component';
import { MyProfileComponent } from './user/my-profile/my-profile/my-profile.component';
import { ProfileComponent } from './user/profile/profile/profile.component';
import { RegisterComponent } from './user/register/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
