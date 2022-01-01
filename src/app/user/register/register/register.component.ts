import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserModel } from 'src/app/models/users/user-model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  form: FormGroup;
  userName: FormControl;
  password: FormControl;
  repassword: FormControl;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  sex: FormControl;
  registred = false;

  user: UserModel = new UserModel;

  constructor(private userService: UserService,
      private route: Router,
      private formBuilder: FormBuilder) 
      {
          this.userName = new FormControl(''), Validators.required;
          this.password = new FormControl(''), Validators.required;
          this.repassword = new FormControl(''), Validators.required;
          this.email = new FormControl(''), Validators.required;
          this.firstName = new FormControl('');
          this.lastName = new FormControl('');
          this.sex = new FormControl(''), Validators.required;
          
          this.form = this.formBuilder.group({
            username: this.userName,
            password: this.password,
            repassword: this.repassword,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            sex: this.sex,
          });
      }

  get formControls() {
    return this.form.controls;
  }    

  onSubmit(){
    if(this.password.value !== this.repassword.value){
      window.alert("hasło niepoprawne");
    }
    else{
      this.user.id = '00000000-0000-0000-0000-000000000000';
      this.user.isBuildIn = true;
      this.user.createdAt = new Date();
      this.user.userName = this.userName.value;
      this.user.password = this.password.value;     
      this.user.email = this.email.value;
      this.user.likes = 0;
      this.user.numberOfBooks = 0;
      this.user.name = this.firstName.value;
      this.user.surname = this.lastName.value;
      this.user.sex = this.sex.value;
      this.user.level = '';

      this.userService
          .postRegister(this.user)
          .pipe(first())
          .subscribe(response => {
            console.log(response);
            this.registred = true;
          },
          error => {
            console.log(`ErrorHttp: ${JSON.stringify(error)}`);
            this.registred = false;
          });

      if(this.registred){
        this.route.navigate(['/login']);
      }
      
    }
  }

}
