import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { MyProfileComponent } from 'src/app/views/user/my-profile/my-profile/my-profile.component';
import { ProfileComponent } from 'src/app/views/user/profile/profile/profile.component';
import { authInterceptorProviders } from 'src/app/helpers/auth.interceptor';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { UserService } from 'src/app/services/user/user.service';
import { LoginGuard } from 'src/app/guard/login/login.guard';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,

    MaterialModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    MyProfileComponent,
    ProfileComponent,
  ],
  providers: [
    authInterceptorProviders,
    SettingsService,
    UserService,

    LoginGuard
  ]
  
})
export class ProfileModule { }
