import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public username?: string;

  @Input() userinfo?: string;

  constructor() { }

  ngOnInit() {
    this.username = this.userinfo || 'Guest';
  }
}
