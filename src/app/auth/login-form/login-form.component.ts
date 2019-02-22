import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ilogin} from '../ilogin';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  public username!: string;
  public password!: string;

  @Output() login = new EventEmitter<Ilogin>();
  @Input() error = '';

  constructor() { }

  ngOnInit() {
  }

  public toLogin() {
    this.login.emit({
        login: this.username || '',
        password: this.password || ''
    });
  }

}
