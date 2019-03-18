import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SetToken = '[Auth] Set user token',
  SetTokenSuccess = '[Auth] Set user token success',
}
export class SetToken implements Action {
  readonly type = AuthActionTypes.SetToken;
  constructor(public payload: string) { }
}

export class SetTokenSuccess implements Action {
  readonly type = AuthActionTypes.SetTokenSuccess;
  constructor(public payload: {
    token: string,
    isAuthenticated: boolean
  }) { }
}

export type AuthActions = SetToken | SetTokenSuccess;

