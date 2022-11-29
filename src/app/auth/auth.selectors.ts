import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.auth
);

export const userLogged = createSelector(
  selectAuthState,
  (auth) => auth.auth?.user
);


export const userName = createSelector(userLogged, (user) => user?.name + ' ' + user?.surname);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
