import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { AppState } from '../../^state/app.reducer';
import authActions, { login } from '../^state/auth.actions';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/models/login';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm!: FormGroup;
    submitted = false;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private store: Store<AppState>) {

        this.loginForm = fb.group({
            email: new FormControl('', {
                nonNullable: true,
                validators: [Validators.required]
            }),
            password: new FormControl('', {
                nonNullable: true,
                validators: [Validators.required]
            })
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (!this.loginForm.valid) {
            return;
        }

        const loginDto: Login = {
            email: 'ben.chuunga@gmail.com',
            password: 'test'
        };

        this.auth.login(loginDto)
            .pipe(
                tap((user: User) => {
                    console.log(user);
                    this.store.dispatch(authActions.login({ user: user }));
                    this.router.navigateByUrl('home');
                })
            )
            .subscribe();

    }

    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }

}

