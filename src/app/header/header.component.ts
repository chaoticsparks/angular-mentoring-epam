import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {IUserFetched} from '../IUserFetched';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  private getUserName() {
    const userInfo = this.authService.getUserInfo();
    if (userInfo) {
      return userInfo.name.first;
    } else {
      return null;
    }
  }

  public isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  public logout() {
    this.authService.logout();
    console.log('Logout action');
    this.router.navigate(['login']);
  }

}
