import {Injectable} from '@angular/core';
import {Ilogin} from './ilogin';
import {HttpClient} from '@angular/common/http';
import {backendConfig} from '../../config.enum';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Observer, of, Subject} from 'rxjs';
import {IUserFetched} from '../IUserFetched';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public token = '';

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticated$.next(true);
      this.token = token;
    }
  }

  public login(userInfo: Ilogin): Observable<any> {
    return this.http.post(backendConfig.apiUrl + 'auth/login', userInfo)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          this.token = response.token;
          this.isAuthenticated$.next(true);
        })
      );
  }

  public logout() {
    localStorage.clear();
    this.isAuthenticated$.next(false);
    this.token = '';
  }

  public fetchUserInfo(): Observable<IUserFetched> {
    return this.http.get<IUserFetched[]>(backendConfig.apiUrl + 'users?fakeToken=' + this.token)
      .pipe(
        map((user: IUserFetched[]) => user[0])
      );
  }
}
