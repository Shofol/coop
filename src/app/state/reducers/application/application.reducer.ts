import { Action, createReducer, on, props } from '@ngrx/store';
import { toggleLoading, loadNotifications } from '../../actions/application.actions';
import { Notifier } from '@/_models/notfier';

export const userFeatureKey = 'application';

export interface ApplicationState {
    loading         : boolean;
    notifications   : Notifier[];
}
export const initialState: ApplicationState = {
    loading         : false,
    notifications   : []
};
const applicationReducer = createReducer(
    initialState,
    on(toggleLoading,       (state, { payload }) => ({ ...state, loading        : payload })),
    on(loadNotifications,   (state, { payload }) => ({ ...state, notifications  : payload }))
);
export function reducer(state: ApplicationState | undefined, action: Action) {
    return applicationReducer(state, action);
}
