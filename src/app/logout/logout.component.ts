import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  @Input() isAuthenticated?: boolean;
  @Output() logout = new EventEmitter<boolean>();

  constructor() {
  }

  public toLogout() {
    this.logout.emit(true);
  }

}
