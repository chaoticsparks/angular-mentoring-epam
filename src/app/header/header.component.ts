import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  public getUserInfo() {
    return this.authService.getUserInfo();
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
