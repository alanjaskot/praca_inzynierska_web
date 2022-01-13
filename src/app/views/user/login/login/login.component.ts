import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { ResponderModel } from 'src/app/models/responders/responder-model';
import { TokenReposnderModel } from 'src/app/models/token-reposnders/token-reponder-model';
import { UserPermissionModel } from 'src/app/models/user-permissions/user-permission-model';
import { LoginModel } from 'src/app/models/users/login-model';
import { UserInfoModel } from 'src/app/models/users/user-info-model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PermissionService } from 'src/app/services/permissions/permission.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  form: FormGroup;
  userName: FormControl;
  password: FormControl;
  tokenLogin: TokenReposnderModel = new TokenReposnderModel;

  login: LoginModel = new LoginModel;
  userMe = new UserInfoModel;
  reponder: ResponderModel = new ResponderModel;
  userPermissionsArray: UserPermissionModel[] | any = [];
  permissionsName = [''];

  constructor(
    private user: UserService,
    private auth: AuthService,
    private permissionService: PermissionService,
    private route: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,) {
      this.userName =  new FormControl('');//, [Validators.required, Validators.minLength(5)]);
      this.password =  new FormControl('');//, [Validators.required, Validators.minLength(5)]);

      this.form = this.formBuilder.group({
        username: this.userName,
        password: this.password,
      });
    }
  get formControls() {
      return this.form.controls;
  }

  onSubmit(){

    this.login.login = this.userName.value;
    this.login.password = this.password.value;

    this.user
    .postLogin(this.login)
    .pipe(first())
      .subscribe(res =>{
        this.form.reset();
        this.tokenLogin.type = res.type;
        this.tokenLogin.token = res.token;
        this.auth.saveType(this.tokenLogin.type);
        this.auth.saveToken(this.tokenLogin.token);
        if(this.tokenLogin.token.length > 2){
          this.toastr.success("jesteś zalogowany");
          this.saveUsernameAndId();
        }
      },
        error => {
          console.error(`ErrorHttp: ${JSON.stringify(error)}`);
      });
    }
    
    saveUsernameAndId(){
      this.user.getMe().subscribe(res =>{
        this.userMe = res;
        this.user.saveUserName(this.userMe.userName);
        this.user.saveUserId(this.userMe.id);
        this.getPermissions(this.userMe.id);
        this.route.navigate([''])
      });
    }

    getPermissions(userId: string){
      return this.permissionService
        .getPermissions(userId)
        .pipe(first())
        .subscribe(res =>{
          this.reponder = res;
          this.userPermissionsArray = this.reponder.object;
          for(let i = 0; i < this.userPermissionsArray.length; i++){
            this.permissionsName[i] = this.userPermissionsArray[i].permissionName;
          }
          this.permissionService.savePermissionsList(this.permissionsName);
        }, error => {
          console.error('ErrorHttp: ${JSON.stringify(error)}')
        })
    }
}



