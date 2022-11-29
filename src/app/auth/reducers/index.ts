import { AuthenticationResponse } from './../../Models/httpResponses/authentication.response';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { UserModel } from 'src/app/Models/user.model';

import { AuthActions } from '../actions-type';

export const authFeatureKey = 'auth';

export interface AuthState {
  auth?: AuthenticationResponse;
}

export const initialAuthState: AuthState = {
  auth: undefined,
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {

    return {
      auth: action.auth,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      auth: undefined,
    };
  })
);
