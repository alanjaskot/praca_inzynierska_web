import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveAuthorComponent } from './authors/approve-author/approve-author/approve-author.component';
import { AuthorComponent } from './authors/author/author/author.component';
import { AuthorsComponent } from './authors/authors/authors/authors.component';
import { DeleteAuthorComponent } from './authors/delete-author/delete-author/delete-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author/edit-author.component';
import { NewAuthorComponent } from './authors/new-author/new-author/new-author.component';
import { CategoriesComponent } from './categories/categories/categories/categories.component';
import { CategoryComponent } from './categories/category/category/category.component';
import { DeleteCategoryComponent } from './categories/delete-category/delete-category/delete-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category/edit-category.component';
import { NewCategoryComponent } from './categories/new-category/new-category/new-category.component';
import { AuthorApproveGuard } from './guard/authors/author-approve.guard';
import { AuthorSoftDeleteGuard } from './guard/authors/author-soft-delete.guard';
import { AuthorUpdateGuard } from './guard/authors/author-update.guard';
import { CategorySoftDeleteGuard } from './guard/categories/category-soft-delete.guard';
import { CategoryUpdateGuard } from './guard/categories/category-update.guard';
import { CategoryWriteGuard } from './guard/categories/category-write.guard';
import { LoginGuard } from './guard/login/login.guard';
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
  {path: 'profile/:id', component: ProfileComponent},
  
  {path: 'authors', children:[
    {path: '', component: AuthorsComponent},
    {path: 'author/:id', component: AuthorComponent},
    {path: 'authors-approve', component: ApproveAuthorComponent, canActivate: [LoginGuard, AuthorApproveGuard]},
    {path: 'new-author', component: NewAuthorComponent, canActivate: [LoginGuard]},
    {path: 'edit-author/:id', component: EditAuthorComponent, canActivate: [LoginGuard, AuthorUpdateGuard]},
    {path: 'delete-author/:id', component: DeleteAuthorComponent, canActivate: [LoginGuard, AuthorSoftDeleteGuard]}
  ]},

  {path: 'categories', children:[
    {path: '', component: CategoriesComponent},
    {path: 'category/:id', component: CategoryComponent},
    {path: 'new-category', component: NewCategoryComponent, canActivate: [LoginGuard, CategoryWriteGuard]},
    {path: 'edit-category/:id', component: EditCategoryComponent, canActivate: [LoginGuard, CategoryUpdateGuard]},
    {path: 'delete-category/:id', component: DeleteCategoryComponent, canActivate: [LoginGuard, CategorySoftDeleteGuard]}
    ]},

    
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
