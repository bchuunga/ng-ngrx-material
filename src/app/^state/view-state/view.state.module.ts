import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { viewState, globalStateFeatureKey } from './view.state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(globalStateFeatureKey, viewState),
    EffectsModule.forFeature([])
  ]
})
export class ViewStateModule { }
