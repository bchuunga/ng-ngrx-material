import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import viewSelectors from '../../^state/view-state/view.selectors';
import authSelectors from '../../auth/^state/auth.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../^state/app.reducer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear: any;
  isMobile$: Observable<boolean> = this.store.select(viewSelectors.isMobile);

  constructor(private store: Store<AppState>) {
    this.currentYear = new Date().getFullYear();
  }
}
