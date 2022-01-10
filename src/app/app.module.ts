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
import { SettingsService } from './services/settings/settings.service';
import { UserService } from './services/user/user.service';
import { MainComponent } from './main/main/main/main.component';
import { NavbarComponent } from './main/navbar/navbar/navbar.component';
import { LoginComponent } from './user/login/login/login.component';
import { RegisterComponent } from './user/register/register/register.component';
import { ProfileComponent } from './user/profile/profile/profile.component';
import { MyProfileComponent } from './user/my-profile/my-profile/my-profile.component';
import { LoginGuard } from './guard/login/login.guard';
import { CategoryService } from './services/category/category.service';
import { CategoriesComponent } from './categories/categories/categories/categories.component';
import { CategoryComponent } from './categories/category/category/category.component';
import { NewCategoryComponent } from './categories/new-category/new-category/new-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category/edit-category.component';
import { ToastrModule } from 'ngx-toastr';
import { DeleteCategoryComponent } from './categories/delete-category/delete-category/delete-category.component';
import { AuthorsComponent } from './authors/authors/authors/authors.component';
import { AuthorComponent } from './authors/author/author/author.component';
import { NewAuthorComponent } from './authors/new-author/new-author/new-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author/edit-author.component';
import { DeleteAuthorComponent } from './authors/delete-author/delete-author/delete-author.component';
import { ApproveAuthorComponent } from './authors/approve-author/approve-author/approve-author.component';
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



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyProfileComponent,
    CategoriesComponent,
    CategoryComponent,
    NewCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    AuthorsComponent,
    AuthorComponent,
    NewAuthorComponent,
    EditAuthorComponent,
    DeleteAuthorComponent,
    ApproveAuthorComponent,
    DeleteAuthorComponent,
    ApproveAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000, // 3 seconds
      progressBar: true,
      positionClass: 'toast-center-center'
    }),

  ],
  providers: [
    UserService,
    SettingsService,
    CategoryService,
    authInterceptorProviders,
    LoginGuard,

    AuthorApproveGuard,
    AuthorSoftDeleteGuard,
    AuthorUpdateGuard,

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
