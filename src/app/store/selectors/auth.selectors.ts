import {IAppState} from '../reducers';
import {createSelector} from '@ngrx/store';
import {IAuthState} from '../reducers/auth-reducer.reducer';

export const selectAuth = (state: IAppState) => state.auth;

export const selectAuthToken = createSelector(
  selectAuth,
  (state: IAuthState) => state.token
);

export const selectAuthisAuthenticated = createSelector(
  selectAuth,
  (state: IAuthState) => state.isAuthenticated
);
