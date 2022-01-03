import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../settings/settings.service';

const TOKEN_KEY = 'auth-token';
const TOKEN_TYPE = 'token-type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  check: string | any = '';

  constructor(
    private router: Router,
    private settingsService: SettingsService,
    ) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveType(type: string): void {
    window.sessionStorage.removeItem(TOKEN_TYPE);
    window.sessionStorage.setItem(TOKEN_TYPE, type);
  }

  public getType(): string | null {
    return window.sessionStorage.getItem(TOKEN_TYPE);
  }

  public isLoggedIn(): boolean{
    this.check = this.getToken()
    if(this.check.length > 2){
      return true;
    } else {
      return false;
    }
  }
}
