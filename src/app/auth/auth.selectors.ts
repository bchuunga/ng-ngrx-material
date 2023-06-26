import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from './reducers/auth.reducer';


export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.user

);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);

const authSelectors = {
    isLoggedIn,
    isLoggedOut
};

export default authSelectors;