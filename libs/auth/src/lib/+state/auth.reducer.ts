import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { User } from "@sample-pro/data-models";
import * as AuthActions from './auth.actions';
import { AuthEntity } from "./auth.models";

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthData {
  loading: boolean;
  user: User;
  error: Error;
}

export interface AuthState {
  readonly auth: AuthData;
}

export interface State extends EntityState<AuthEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<AuthEntity>();

export const initialState: State = authAdapter.getInitialState({
  action: AuthActions,
  loaded: false,
});


export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    user: AuthActions.loginSuccess,
    loading: false,
  })),
  on(AuthActions.loginFailure, (state) => ({
    ...state,
    user: null,
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
