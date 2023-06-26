import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { AppState } from '../../reducers';
import { login } from '../auth.actions';

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
        if (!this.loginForm.valid)
            return;

        console.log(this.loginForm.value);
    }

    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }

}

