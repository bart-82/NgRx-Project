import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './actions-type';
import { tap } from 'rxjs';

@Injectable()
export class AuthEffects {
  //this class must not be injected in other parts oh the application

  constructor(private actions$: Actions, private router: Router) { }

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) =>
          localStorage.setItem('auth', JSON.stringify(action.auth))
        )
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          localStorage.removeItem('auth');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );
}
