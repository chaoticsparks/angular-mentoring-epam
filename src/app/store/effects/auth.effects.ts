import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {AuthActionTypes, SetToken, SetTokenSuccess} from '../actions/auth-actions.actions';


@Injectable()
export class AuthEffects {

  @Effect()
  setToken$ = this.actions$.pipe(
    ofType<SetToken>(AuthActionTypes.SetToken),
    map((action) => {
      if (action.payload) {
        localStorage.setItem('token', action.payload);
        return new SetTokenSuccess({token: action.payload, isAuthenticated: true});
      } else {
        localStorage.clear();
        return new SetTokenSuccess({token: '', isAuthenticated: false});
      }
    })
  );


  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {
  }

}
