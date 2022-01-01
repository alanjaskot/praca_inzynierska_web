import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TokenReposnderModel } from 'src/app/models/token-reposnders/token-reponder-model';
import { LoginModel } from 'src/app/models/users/login-model';
import { UserInfoModel } from 'src/app/models/users/user-info-model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  isLogged = false;
  form: FormGroup;
  userName: FormControl;
  password: FormControl;
  tokenLogin: TokenReposnderModel = new TokenReposnderModel;


  login: LoginModel = new LoginModel;
  userMe = new UserInfoModel;

  constructor(
    private user: UserService,
    private auth: AuthService,
    private route: Router,
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
        this.isLogged = true;
      },
        error => {
          console.error(`ErrorHttp: ${JSON.stringify(error)}`);
          this.isLogged = false;
      });
      
      if(this.isLogged){
        this.saveUsernameAndId();
      }
      
    }

    

    saveUsernameAndId(){
      this.user.getMe().subscribe(res =>{
        this.userMe = res;
      });
      this.user.saveUserName(this.userMe.userName);
      this.user.saveUserId(this.userMe.id);
      this.route.navigate([''])
    }
}


