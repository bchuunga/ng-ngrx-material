import { createAction, props } from "@ngrx/store";

export const screenViewChanged = createAction(
    '[App] Set page view',
    props<{ isMobile: boolean }>()
);

const globalActions = {
    screenViewChanged
};

export default globalActions;