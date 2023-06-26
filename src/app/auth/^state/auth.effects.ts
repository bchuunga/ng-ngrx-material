import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import authActions from './auth.actions';
import { UserEnums } from 'src/app/shared/enums/enums';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(authActions.login),
                tap(action => localStorage.setItem(UserEnums.currentUser,
                    JSON.stringify(action.user))
                )
            )
        ,
        { dispatch: false });

    logout$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(authActions.logout),
                tap(action => {
                    localStorage.removeItem(UserEnums.currentUser);
                    this.router.navigateByUrl('/login');
                })
            )
        , { dispatch: false });


    constructor(private actions$: Actions,
        private router: Router) {

    }

}
