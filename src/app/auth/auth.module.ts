import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from "../shared/shared.module";
import { AuthEffects } from './^state/auth.effects';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
        StoreModule.forFeature(authFeatureKey, authReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class AuthModule { }
