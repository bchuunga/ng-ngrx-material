import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AppState } from './reducers/app.reducers';
import { login, logout } from './auth/^state/auth.actions';
import authSelectors from './auth/^state/auth.selectors';
import { UserEnums } from './shared/enums/enums';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    loading = true;

    isLoggedIn$ = this.store.select(authSelectors.isLoggedIn);
    isLoggedOut$ = this.store.select(authSelectors.isLoggedOut);

    constructor(
        private router: Router,
        private store: Store<AppState>) { }

    ngOnInit() {
        const userProfile = localStorage.getItem(UserEnums.currentUser);

        if (userProfile) {
            this.store.dispatch(login({ user: JSON.parse(userProfile) }));
        }

        this.router.events.subscribe(event => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }

                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }

    logout() {
        this.store.dispatch(logout());
    }

}
