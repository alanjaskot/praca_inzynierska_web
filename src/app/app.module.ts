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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    UserService,
    SettingsService,
    authInterceptorProviders,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
