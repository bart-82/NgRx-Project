import { AuthenticationResponse } from './../Models/httpResponses/authentication.response';

import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] User Login',
  props<{ auth: AuthenticationResponse }>()
);

export const logout = createAction('[Top Menu] Logout');
