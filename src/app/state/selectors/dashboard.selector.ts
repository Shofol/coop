import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectDashboardState = (state: AppState) => state.dashboard;

export const getDashInfo    = createSelector( selectDashboardState, store => store.dashInfo );
export const getDashDate    = createSelector( selectDashboardState, store => store.dashDate );
export const getTodos       = createSelector( selectDashboardState, store => store.todos );
export const getReminders   = createSelector( selectDashboardState, store => store.reminders );
