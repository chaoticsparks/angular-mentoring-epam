import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, Observer} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('authguard');
    return new Observable((observer: Observer<boolean>) => {
      this.authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
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
