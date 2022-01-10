import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponderModel } from 'src/app/models/responders/responder-model';
import { TokenReposnderModel } from 'src/app/models/token-reposnders/token-reponder-model';
import { LoginModel } from 'src/app/models/users/login-model';
import { UserModel } from 'src/app/models/users/user-model';
import { SettingsService } from '../settings/settings.service';


const USER_NAME = 'user-name';
const USER_ID = 'user-id';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }),
  params: new HttpParams(),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName: string | null = '';
  userId: string | null = '';

  constructor(
    private httpClient: HttpClient,
    private settingsService: SettingsService,
    private toastr: ToastrService) { }

  postLogin(user: LoginModel): Observable<TokenReposnderModel | any>
  {
      const apiUrl = this.settingsService.getApiUrl + `/api/Authorization/Login`;

      return this.httpClient
          .post(apiUrl, user)
          .pipe(map(tokenResposne =>{
              return tokenResposne;
          }),
          catchError(error => {
            this.toastr.error(JSON.stringify(error.error));
            return this.handleError(error);
          }));
  }

  postRegister(user: UserModel): Observable<any>{
    const apiUrl = this.settingsService.getApiUrl + '/api/Authorization/Register';

    return this.httpClient
      .post(apiUrl, user)
      .pipe(map(response => {
        return response;
      }),
      catchError(error => {
        return this.handleError(error);
      }));
}

  getMe(): Observable<ResponderModel | any>{
    const apiUrl = this.settingsService.getApiUrl + '/api/User/GetMeWithPassword';

    return this.httpClient
      .get<UserModel>(apiUrl, {withCredentials: true})
      .pipe(map(response => {
        return response;
      }),
      catchError(error => {
        return this.handleError(error);
      }));
  }

  getUserNameById(id: string): Observable<ResponderModel | any> {
    const apiUrl = this.settingsService.getApiUrl + '/api/User/GetUserNameById?id=' + id;

    return this.httpClient
      .get<ResponderModel>(apiUrl)
      .pipe(map(response =>{
        return response;
      }),
      catchError(error =>{
        return this.handleError(error);
      }));
  }

  getUserById(id: string){
    const apiUrl = this.settingsService.getApiUrl + '/api/User/GetUserById?id=' + id;

    return this.httpClient
      .get<ResponderModel>(apiUrl)
      .pipe(map(response =>{
        return response;
      }),
      catchError(error =>{
        return this.handleError(error);
      }))
  }

  updateUser(user: UserModel){
    const apiUrl = this.settingsService.getApiUrl + '/api/User/UpdateUser';

    return this.httpClient
      .post<UserModel>(apiUrl, user)
      .pipe(map(response =>{
        return response;
      }),
      catchError(error =>{
        return this.handleError(error);
      }))
  }

  saveUserName(userName: string){
    window.sessionStorage.removeItem(USER_NAME);
    window.sessionStorage.setItem(USER_NAME, userName);
  }

  getUserName(): string{
    this.userName = window.sessionStorage.getItem(USER_NAME);
    if(this.userName != null){
      return this.userName;
    }
    return '';
  }

  saveUserId(userId: string){
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_ID, userId);
  }

  getUserId(): string {
    this.userId = window.sessionStorage.getItem(USER_ID);
    if(this.userId != null){
      return this.userId;
    }
    return '';
  }

  /*
  login(userName: string, password: string)
  {
      const apiUrl = this.settingsService.getApiUrl + `/api/Authorization/Login`;

      //httpOptions.params = new HttpParams()
      //  .set(`login`, userName)
      //  .set(`password`, password);

      var userModel = new LoginModel();
      userModel.login = userName;
      userModel.password = password;

      return this.httpClient
        .post(apiUrl, userModel)
        .pipe(map(authTokenWithUser => {
          console.log("RES: " + JSON.stringify(authTokenWithUser));

          localStorage.setItem('authTokenWithUser', JSON.stringify(authTokenWithUser));

          return authTokenWithUser;
        }),
          catchError(error => {
            return this.handleError(error);
          }));

  }
  */

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(`HttpError: ${JSON.stringify(error)}`);

    return throwError(error);
  }
}
