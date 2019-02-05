import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {ILocation} from 'selenium-webdriver';
import {Ilogin} from '../ilogin';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public username!: string;
  public password!: string;

  @Output() login = new EventEmitter<Ilogin>();

  constructor() { }

  ngOnInit() {
  }

  public toLogin() {
    this.login.emit({
        username: this.username,
        password: this.password
    });
  }

}
