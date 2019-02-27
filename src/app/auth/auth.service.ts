import {Injectable} from '@angular/core';
import {Ilogin} from './ilogin';
import {HttpClient} from '@angular/common/http';
import {backendConfig} from '../../config.enum';
import {map, tap} from 'rxjs/operators';
import {Observable, Observer, of, Subject} from 'rxjs';
import {IUserFetched} from '../IUserFetched';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = false;
  public token = '';
  public userInfo$ = new Subject<IUserFetched | null>();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticated = true;
      this.token = token;
    }
    this.fetchUserInfo();
  }

  public login(userInfo: Ilogin): Observable<any> {
    return this.http.post(backendConfig.apiUrl + 'auth/login', userInfo)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          this.token = response.token;
          this.isAuthenticated = true;
          this.fetchUserInfo();
        })
      );
  }

  public logout() {
    localStorage.clear();
    this.isAuthenticated = false;
    this.token = '';
    this.fetchUserInfo();
  }

  private fetchUserInfo() {
    if (this.isAuthenticated) {
      this.http.get<IUserFetched[]>(backendConfig.apiUrl + 'users?fakeToken=' + this.token)
        .subscribe((user: IUserFetched[]) => {
          this.userInfo$.next(user[0]);
        });
    } else {
      this.userInfo$.next(null);
    }
  }
}
