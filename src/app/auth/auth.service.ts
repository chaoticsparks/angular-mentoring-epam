import {Injectable} from '@angular/core';
import {Ilogin} from './ilogin';
import {HttpClient} from '@angular/common/http';
import {backendConfig} from '../../config.enum';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {IUserFetched} from '../IUserFetched';
import {select, Store} from '@ngrx/store';
import {selectAuthToken} from '../store/selectors/auth.selectors';
import {IAppState} from '../store/reducers';
import {SetToken} from '../store/actions/auth-actions.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private store: Store<IAppState>) {
  }

  public login(userInfo: Ilogin): Observable<any> {
    return this.http.post(backendConfig.apiUrl + 'auth/login', userInfo)
      .pipe(
        tap((response: any) => {
          this.store.dispatch(new SetToken(response.token));
        }),
      );
  }

  public logout() {
    this.store.dispatch(new SetToken(''));
  }

  public fetchUserInfo(): Observable<null | IUserFetched> {
    return this.store.pipe(
      select(selectAuthToken),
      mergeMap<string, IUserFetched | null>((token) => {
        if (token) {
          return this.http.get<IUserFetched[]>(backendConfig.apiUrl + 'users?fakeToken=' + token)
            .pipe(map((user: IUserFetched[]) => user[0]));
        } else {
          return of(null);
        }
      })
    );
  }
}
