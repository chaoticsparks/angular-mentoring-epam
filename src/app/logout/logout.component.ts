import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  public isAuthenticated?: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  public logout() {
    this.authService.logout();
    console.log('Logout action');
  }

}
