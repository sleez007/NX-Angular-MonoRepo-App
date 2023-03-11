import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authenticate } from '@sample-pro/data-models';
import { AuthState } from '../../+state/auth.reducer';
import * as authActions from './../../+state/auth.actions';

@Component({
  selector: 'sample-pro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor(private store: Store<AuthState>) {}

  login(authenticate: Authenticate) {
    this.store.dispatch(authActions.login({ payload: authenticate }));
  }
}
