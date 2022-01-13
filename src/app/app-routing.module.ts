import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorApproveGuard } from './guard/authors/author-approve.guard';
import { AuthorSoftDeleteGuard } from './guard/authors/author-soft-delete.guard';
import { AuthorUpdateGuard } from './guard/authors/author-update.guard';
import { CategorySoftDeleteGuard } from './guard/categories/category-soft-delete.guard';
import { CategoryUpdateGuard } from './guard/categories/category-update.guard';
import { CategoryWriteGuard } from './guard/categories/category-write.guard';
import { LoginGuard } from './guard/login/login.guard';
import { ApproveAuthorComponent } from './views/authors/approve-author/approve-author/approve-author.component';
import { ApproveAuthorsComponent } from './views/authors/approve-authors/approve-authors.component';
import { AuthorComponent } from './views/authors/author/author/author.component';
import { AuthorsComponent } from './views/authors/authors/authors/authors.component';
import { DeleteAuthorComponent } from './views/authors/delete-author/delete-author/delete-author.component';
import { EditAuthorComponent } from './views/authors/edit-author/edit-author/edit-author.component';
import { NewAuthorComponent } from './views/authors/new-author/new-author/new-author.component';
import { CategoriesComponent } from './views/categories/categories/categories/categories.component';
import { CategoryComponent } from './views/categories/category/category/category.component';
import { DeleteCategoryComponent } from './views/categories/delete-category/delete-category/delete-category.component';
import { EditCategoryComponent } from './views/categories/edit-category/edit-category/edit-category.component';
import { NewCategoryComponent } from './views/categories/new-category/new-category/new-category.component';
import { MainComponent } from './views/main/main/main/main.component';
import { LoginComponent } from './views/user/login/login/login.component';
import { MyProfileComponent } from './views/user/my-profile/my-profile/my-profile.component';
import { ProfileComponent } from './views/user/profile/profile/profile.component';
import { RegisterComponent } from './views/user/register/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [LoginGuard]},
  {path: 'profile/:id', component: ProfileComponent},

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
