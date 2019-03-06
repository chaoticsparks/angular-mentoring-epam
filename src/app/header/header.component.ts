import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {IUserFetched} from '../IUserFetched';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public username = '';
  public isAuthenticated!: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.isAuthenticated$
      .pipe(
        tap((isAuthenticated) => {
          this.isAuthenticated = isAuthenticated;
        }),
        mergeMap((isAuthenticated: boolean) => {
          if (isAuthenticated) {
            return this.authService.fetchUserInfo()
              .pipe(
                map((user: IUserFetched) => user.name.first)
              );
          } else {
            return of('Guest');
          }
        }))
      .subscribe((username: string) => {
        this.username = username;
      });
  }

  public logout() {
    this.authService.logout();
    console.log('Logout action');
    this.router.navigate(['login']);
  }

}
