import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Ilogin} from '../ilogin';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  public logingError = '';
  private subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public login(event: Ilogin) {
    this.subscription = this.authService.login({
      login: event.login,
      password: event.password
    })
      .subscribe(
        (r: any) => {
          console.log('Login action');
          this.router.navigate(['/']);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.logingError = error.error;
          }
        });
  }

}
