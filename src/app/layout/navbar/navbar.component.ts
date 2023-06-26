import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/^state/app.reducer';
import authActions from 'src/app/auth/^state/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store<AppState>) { }

  logout() {
    this.store.dispatch(authActions.logout());
  }

}
