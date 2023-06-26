import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './reducers';
import { EntityDataModule } from '@ngrx/data';
import { SharedModule } from "./shared/shared.module";
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        AuthModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictStateSerializability: true
            }
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
