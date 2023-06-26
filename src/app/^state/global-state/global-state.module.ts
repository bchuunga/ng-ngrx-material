import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { globalReducer, globalStateFeatureKey } from './global-reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(globalStateFeatureKey, globalReducer),
    EffectsModule.forFeature([])
  ]
})
export class GlobalStateModule { }
