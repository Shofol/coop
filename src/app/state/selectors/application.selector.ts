import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectApplicationState = (state: AppState) => state.application;

export const getLoading         = createSelector( selectApplicationState, store => store.loading );
export const getNotifications   = createSelector( selectApplicationState, store => store.notifications );
