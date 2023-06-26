import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/^state/app.reducer';
import authActions from 'src/app/auth/^state/auth.actions';
import authSelectors from 'src/app/auth/^state/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLoggedIn$: Observable<boolean> = this.store.select(authSelectors.isLoggedIn);
  isLoggedOut$: Observable<boolean> = this.store.select(authSelectors.isLoggedOut);

  constructor(private store: Store<AppState>) { }

  logout() {
    this.store.dispatch(authActions.logout());
  }

}
