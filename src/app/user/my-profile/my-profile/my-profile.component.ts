import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserInfoModel } from 'src/app/models/users/user-info-model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userMe: UserInfoModel = new UserInfoModel;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.getMe();
  }

  getMe(){
    this.user
      .getMe()
      .pipe(first())
      .subscribe(response => {
        this.userMe = response;
      },
      error => {
        console.error(`ErrorHttp: ${JSON.stringify(error)}`);
      }
      );
  }

}
