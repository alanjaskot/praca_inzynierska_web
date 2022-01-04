import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories/categories/categories.component';
import { CategoryComponent } from './categories/category/category/category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category/edit-category.component';
import { NewCategoryComponent } from './categories/new-category/new-category/new-category.component';
import { LoginGuard } from './guard/login/login.guard';
//import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { MainComponent } from './main/main/main/main.component';
import { CategoryService } from './services/category/category.service';
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
  {path: 'profile', component: ProfileComponent},
  
  {path: 'categories', children:[
    {path: '', component: CategoriesComponent},
    {path: 'category/:id', component: CategoryComponent},
    {path: 'new-category', component: NewCategoryComponent, canActivate: [LoginGuard]},
    {path: 'edit-category', component: EditCategoryComponent}
    ]}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
