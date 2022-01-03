import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  checkIsLogin(){
    this.isLoggedIn = this.auth.isLoggedIn();
  }

}
