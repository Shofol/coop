import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectUserState = (state: AppState) => state.user;
export const getUser = createSelector(
  selectUserState,
  store => store.user
);
