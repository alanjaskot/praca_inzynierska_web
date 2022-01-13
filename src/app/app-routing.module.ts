import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from './views/main/main/main/main.component';
import { LoginComponent } from './views/user/login/login/login.component';

import { RegisterComponent } from './views/user/register/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},


  {path: 'profiles', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)},
  {path: 'authors', loadChildren: () => import('./modules/author/author.module').then(m => m.AuthorModule)},
  {path: 'categories', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)},
  
  ];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
