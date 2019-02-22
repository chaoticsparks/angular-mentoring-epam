import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPanelComponent {

  @Input() username?: string;
  @Input() isAuthenticated?: boolean;
  @Output() logout = new EventEmitter<boolean>();

  constructor() { }

  public toLogout() {
    this.logout.emit(true);
  }

}
