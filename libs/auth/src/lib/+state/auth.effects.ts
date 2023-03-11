import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { AuthActionTypes , loginFailure, loginSuccess} from './auth.actions';
import { AuthService } from './../services/auth/auth.service';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    exhaustMap((a) => this.authService.login(a['payload']).pipe(map(u => loginSuccess({payload: u})))),
    catchError(error => of(loginFailure(error)))
  ));

  navigateToProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.LoginSuccess),
        map((action: AuthActionTypes.LoginSuccess) => action),
        tap(() => this.router.navigate([`/products`]))
      ),
    { dispatch: false }
  );
  
}

