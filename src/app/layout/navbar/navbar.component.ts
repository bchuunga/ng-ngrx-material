import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import authActions from 'src/app/auth/auth.actions';
import { AppState } from 'src/app/reducers';

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
