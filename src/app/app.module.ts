import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material/material.module';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './views/main/main/main/main.component';
import { NavbarComponent } from './views/main/navbar/navbar/navbar.component';
import { LoginComponent } from './views/user/login/login/login.component';
import { RegisterComponent } from './views/user/register/register/register.component';
import { ProfileComponent } from './views/user/profile/profile/profile.component';
import { MyProfileComponent } from './views/user/my-profile/my-profile/my-profile.component';
import { LoginGuard } from './guard/login/login.guard';
import { CategoryService } from './services/category/category.service';
import { CategoriesComponent } from './views/categories/categories/categories/categories.component';
import { CategoryComponent } from './views/categories/category/category/category.component';
import { NewCategoryComponent } from './views/categories/new-category/new-category/new-category.component';
import { EditCategoryComponent } from './views/categories/edit-category/edit-category/edit-category.component';
import { ToastrModule } from 'ngx-toastr';
import { DeleteCategoryComponent } from './views/categories/delete-category/delete-category/delete-category.component';
import { AuthorsComponent } from './views/authors/authors/authors/authors.component';
import { AuthorComponent } from './views/authors/author/author/author.component';
import { NewAuthorComponent } from './views/authors/new-author/new-author/new-author.component';
import { EditAuthorComponent } from './views/authors/edit-author/edit-author/edit-author.component';
import { DeleteAuthorComponent } from './views/authors/delete-author/delete-author/delete-author.component';
import { ApproveAuthorComponent } from './views/authors/approve-author/approve-author/approve-author.component';
import { AuthorApproveGuard } from './guard/authors/author-approve.guard';
import { AuthorSoftDeleteGuard } from './guard/authors/author-soft-delete.guard';
import { AuthorUpdateGuard } from './guard/authors/author-update.guard';
import { BookAuthorDeleteGuard } from './guard/book-authors/book-author-delete.guard';
import { BookAproveGuard } from './guard/books/book-aprove.guard';
import { BookSoftDeleteGuard } from './guard/books/book-soft-delete.guard';
import { BookUpdateGuard } from './guard/books/book-update.guard';
import { CategorySoftDeleteGuard } from './guard/categories/category-soft-delete.guard';
import { CategoryUpdateGuard } from './guard/categories/category-update.guard';
import { CategoryWriteGuard } from './guard/categories/category-write.guard';
import { CommentDeleteGuard } from './guard/comments/comment-delete.guard';
import { LanguageSoftDeleteGuard } from './guard/languages/language-soft-delete.guard';
import { LanguageUpdateGuard } from './guard/languages/language-update.guard';
import { LanguageWriteGuard } from './guard/languages/language-write.guard';
import { PublisherSoftDeleteGuard } from './guard/publishers/publisher-soft-delete.guard';
import { PublisherUpdateGuard } from './guard/publishers/publisher-update.guard';
import { PublisherWriteGuard } from './guard/publishers/publisher-write.guard';
import { UserPermissionDeleteGuard } from './guard/user-permissions/user-permission-delete.guard';
import { UserPermissionUpdateGuard } from './guard/user-permissions/user-permission-update.guard';
import { UserPermissionWriteGuard } from './guard/user-permissions/user-permission-write.guard';
import { UserDeleteGuard } from './guard/users/user-delete.guard';
import { ApproveAuthorsComponent } from './views/authors/approve-authors/approve-authors.component';
import { UserAuthModule } from './modules/user-auth/user-auth/user-auth.module';
import { AuthorModule } from './modules/author/author/author.module';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    CategoriesComponent,
    CategoryComponent,
    NewCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserAuthModule,
    AuthorModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000, // 3 seconds
      progressBar: true,
      positionClass: 'toast-center-center'
    }),

  ],
  providers: [
    CategoryService,
    authInterceptorProviders,
    LoginGuard,

    BookAuthorDeleteGuard,

    BookAproveGuard,
    BookSoftDeleteGuard,
    BookUpdateGuard,

    CategorySoftDeleteGuard,
    CategoryUpdateGuard,
    CategoryWriteGuard,

    CommentDeleteGuard,

    LanguageSoftDeleteGuard,
    LanguageUpdateGuard,
    LanguageWriteGuard,


    PublisherSoftDeleteGuard,
    PublisherUpdateGuard,
    PublisherWriteGuard,

    UserPermissionDeleteGuard,
    UserPermissionUpdateGuard,
    UserPermissionWriteGuard,

    UserDeleteGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
