import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {IUserFetched} from '../IUserFetched';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public username = 'Guest';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.userInfo$
      .subscribe((userInfo: IUserFetched | null) => {
        console.log(userInfo);
        this.username = userInfo ? userInfo.name.first : 'Guest';
      });
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
