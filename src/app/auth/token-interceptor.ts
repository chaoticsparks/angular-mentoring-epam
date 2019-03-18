import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectAuthToken} from '../store/selectors/auth.selectors';
import {IAppState} from '../store/reducers';
import {first, mergeMap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store: Store<IAppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(selectAuthToken).pipe(
      first(),
      mergeMap((token) => {
        const authReq = token ? req.clone({
          headers: req.headers.set('Authorization', token)
        }) : req;
        return next.handle(authReq);
      }));
  }
}
