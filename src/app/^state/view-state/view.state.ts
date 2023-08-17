import { createReducer, on } from "@ngrx/store";
import viewActions from "./view.actions";

export const globalStateFeatureKey = 'viewport';

export interface GlobalState {
    isMobile: boolean;
};

export const initialGlobalState: GlobalState = {
    isMobile: false
};

export const viewState = createReducer(
    initialGlobalState,
    on(viewActions.screenViewChanged, (state, action) => ({
        ...state,
        isMobile: action.isMobile
    }))
)
