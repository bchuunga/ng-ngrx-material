import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { SharedModule } from "./shared/shared.module";
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { metaReducers, reducers } from './^state/app.reducer';
import { GlobalStateModule } from './^state/global-state/global-state.module';

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
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        }),
        GlobalStateModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
