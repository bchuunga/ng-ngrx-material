import { createReducer, on } from '@ngrx/store';
import { User } from '../model/user.model';
import authActions from '../auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
    user: User | undefined
}

export const initialAuthState: AuthState = {
    user: undefined
};

export const authReducer = createReducer(
    initialAuthState,
    on(authActions.login, (state, action) => ({
        ...state,
        user: action.user
    })),
    on(authActions.logout, (state, action) => ({
        ...state,
        user: undefined
    }))
);

