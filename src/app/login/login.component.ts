import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username?: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getUserInfo() || 'Guest';
  }
}
