import {Injectable} from '@angular/core';
import {Ilogin} from './ilogin';
import {HttpClient} from '@angular/common/http';
import {backendConfig} from '../../config.enum';
import { tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {IUserFetched} from '../IUserFetched';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = false;
  public token = '';
  private userInfo: IUserFetched | null = null;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticated = true;
      this.token = token;
    }
  }

  public login(userInfo: Ilogin): Observable<any> {
    return this.http.post(backendConfig.apiUrl + 'auth/login', userInfo)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          this.token = response.token;
          this.isAuthenticated = true;
          this.http.get<IUserFetched[]>(backendConfig.apiUrl + 'users?fakeToken=' + this.token)
            .subscribe((user: IUserFetched[]) => {
              this.userInfo = user[0];
          });
        })
      );
  }

  public logout() {
    localStorage.clear();
    this.isAuthenticated = false;
    this.token = '';
    this.userInfo = null;
  }

  public getUserInfo(): IUserFetched | null {
    return this.userInfo;
  }
}
