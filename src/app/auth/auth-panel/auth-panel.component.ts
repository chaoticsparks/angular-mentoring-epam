import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPanelComponent implements OnInit {

  public username?: string;

  @Input() userinfo?: string;
  @Input() isAuthenticated?: boolean;
  @Output() logout = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.username = this.userinfo || 'Guest';
  }

  public toLogout() {
    this.logout.emit(true);
  }

}
