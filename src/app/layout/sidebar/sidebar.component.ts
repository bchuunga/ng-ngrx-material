import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import viewSelectors from '../../^state/view-state/view.selectors';
import authSelectors from '../../auth/^state/auth.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../^state/app.reducer';
import authActions from '../../auth/^state/auth.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isMobile$: Observable<boolean> = this.store.select(viewSelectors.isMobile);
  isLoggedIn$: Observable<boolean> = this.store.select(
    authSelectors.isLoggedIn,
  );
  isLoggedOut$: Observable<boolean> = this.store.select(
    authSelectors.isLoggedOut,
  );

  constructor(private store: Store<AppState>) {}

  logout() {
    this.store.dispatch(authActions.logout());
  }
}
