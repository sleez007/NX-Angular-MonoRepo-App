import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '@sample-pro/auth';
import * as AuthActions from '@sample-pro/auth';

@Component({
  selector: 'sample-pro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer-portal';

  constructor(private store: Store<AuthState>) {
    const user = JSON.parse(localStorage.getItem('user') ?? '' );
    if (user) {
      this.store.dispatch(AuthActions.loginSuccess(user));
    }
  }
}
