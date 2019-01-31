import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = false;

  constructor() {
    this.isAuthenticated = Boolean(localStorage.getItem('user'));
  }

  public login(userInfo: {user: string, password: string}) {
    localStorage.setItem('user', userInfo.user );
    localStorage.setItem('token', btoa(userInfo.user + userInfo.password));
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
