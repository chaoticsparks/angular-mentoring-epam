import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ilogin} from '../ilogin';
import {FormBuilder, Validators} from '@angular/forms';
import {dateFormatValidator} from '../../courses/input-date/input-date.component';
import {courseDurationInputTypeValidator} from '../../courses/input-duration/input-duration.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Output() login = new EventEmitter<Ilogin>();
  @Input() error = '';

  loginForm = this.fb.group({
    login: ['', [
      Validators.required,
    ]],
    password: ['',
      [
        Validators.required,
      ]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  get loginInput() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public toLogin() {
    this.login.emit(this.loginForm.value);
  }

}
