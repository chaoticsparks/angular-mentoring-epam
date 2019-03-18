import {AuthActions, AuthActionTypes} from '../actions/auth-actions.actions';

export interface IAuthState {
  token: string;
  isAuthenticated: boolean;
}

export const initialAuthState: IAuthState = {
  token: localStorage.getItem('token') || '',
  isAuthenticated: !!localStorage.getItem('token')
};


export function authReducer(state = initialAuthState, action: AuthActions): IAuthState {
  switch (action.type) {

    case AuthActionTypes.SetTokenSuccess: {
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: action.payload.isAuthenticated
      };
    }

    default:
      return state;
  }
}
