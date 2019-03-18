import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, Observer} from 'rxjs';
import {IAppState} from '../store/reducers';
import {select, Store} from '@ngrx/store';
import {selectAuthisAuthenticated} from '../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<IAppState>,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable((observer: Observer<boolean>) => {
      this.store.pipe(select(selectAuthisAuthenticated)).subscribe((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          observer.next(true);
        } else {
          observer.next(false);
          this.router.navigate(['login']);
        }
      });
    });
  }
}
