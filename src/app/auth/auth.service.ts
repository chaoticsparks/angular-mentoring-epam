import {Injectable, OnInit} from '@angular/core';
import {Ilogin} from './ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = false;

  constructor() {
    this.isAuthenticated = Boolean(localStorage.getItem('user'));
  }

  public login(userInfo: Ilogin) {
    localStorage.setItem('user', userInfo.username );
    localStorage.setItem('token', btoa(userInfo.username + userInfo.password));
    this.isAuthenticated = true;
  }

  public logout() {
    localStorage.clear();
    this.isAuthenticated = false;
  }

  public getUserInfo(): string | null {
    return localStorage.getItem('user');
  }
}
