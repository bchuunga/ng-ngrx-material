import { createReducer, on } from "@ngrx/store";
import globalActions from "./global.actions";

export const globalStateFeatureKey = 'global';

export interface GlobalState {
    isMobile: boolean;
};

export const initialGlobalState: GlobalState = {
    isMobile: false
};

export const globalReducer = createReducer(
    initialGlobalState,
    on(globalActions.screenViewChanged, (state, action) => ({
        ...state,
        isMobile: action.isMobile
    }))
)