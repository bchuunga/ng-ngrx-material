import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GlobalState, globalStateFeatureKey } from "./global-reducer";

export const selectGlobalState = createFeatureSelector<GlobalState>(globalStateFeatureKey);

export const isMobile = createSelector(
    selectGlobalState,
    view => view.isMobile
);

const globalSelectors = {
    isMobile
};

export default globalSelectors;