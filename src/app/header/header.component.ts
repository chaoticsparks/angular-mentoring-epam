import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {IUserFetched} from '../IUserFetched';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../store/reducers';
import {selectAuth, selectAuthisAuthenticated} from '../store/selectors/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public username$ = this.authService.fetchUserInfo()
    .pipe(
      map((result) => {
        return result ? result.name.first : 'Guest';
      })
    );

  public isAuthenticated$ = this.store.pipe(select(selectAuthisAuthenticated));

  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<IAppState>) {
  }

  public logout() {
    this.authService.logout();
    console.log('Logout action');
    this.router.navigate(['login']);
  }

}
