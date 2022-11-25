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
  user: AuthenticationResponse;
}

export const initialAuthState: AuthState = {
  user: { id: '', token: '' },
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: { id: '', token: '' },
    };
  })
);
