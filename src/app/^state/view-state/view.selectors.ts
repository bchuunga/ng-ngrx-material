import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GlobalState, globalStateFeatureKey } from "./view.state";

export const selectGlobalState = createFeatureSelector<GlobalState>(globalStateFeatureKey);

export const isMobile = createSelector(
    selectGlobalState,
    view => view.isMobile
);

const viewSelectors = {
    isMobile
};

export default viewSelectors;
