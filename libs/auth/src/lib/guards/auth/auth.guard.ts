import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthState } from '../../+state/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {}
  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select((state) => state.auth.user),
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate([`/auth/login`]);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate([`/auth/login`]);
        return of(false)
      })

    );
  }
  
}
