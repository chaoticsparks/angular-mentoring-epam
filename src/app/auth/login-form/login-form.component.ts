import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public username!: string;
  public password!: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login({
      user: this.username,
      password: this.password
    });
    console.log('Login action');
  }

}
