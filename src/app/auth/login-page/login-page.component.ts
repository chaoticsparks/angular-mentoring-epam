import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Ilogin} from '../ilogin';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login(event: Ilogin) {
    this.authService.login({
      username: event.username,
      password: event.password
    });
    console.log('Login action');
  }

}
