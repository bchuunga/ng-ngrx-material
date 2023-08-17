import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AppState } from './^state/app.reducer';
import { login, logout } from './auth/^state/auth.actions';
import authSelectors from './auth/^state/auth.selectors';
import { UserEnums } from './shared/enums/enums';
import viewSelectors from './^state/view-state/view.selectors';
import { Observable, map } from 'rxjs';
import viewActions from './^state/view-state/view.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    loading = true;

    isLoggedIn$: Observable<boolean> = this.store.select(authSelectors.isLoggedIn);
    isLoggedOut$: Observable<boolean> = this.store.select(authSelectors.isLoggedOut);
    isMobile$: Observable<boolean> = this.store.select(viewSelectors.isMobile);

    constructor(
        private readonly router: Router,
        private readonly breakpointObserver: BreakpointObserver,
        private readonly store: Store<AppState>) { }

    ngOnInit() {
        const userProfile = localStorage.getItem(UserEnums.currentUser);

        if (userProfile) {
            this.store.dispatch(login({ user: JSON.parse(userProfile) }));
        }

        this.breakpointObserver
            .observe([Breakpoints.XSmall, Breakpoints.Small])
            .pipe(
                map((b) => b.matches)
            )
            .subscribe((m) => {
                this.store.dispatch(
                    viewActions.screenViewChanged({ isMobile: m })
                );
            });

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
