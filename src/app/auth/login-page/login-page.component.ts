import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Ilogin} from '../ilogin';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public logingError = '';

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  public login(event: Ilogin) {
    this.authService.login({
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
