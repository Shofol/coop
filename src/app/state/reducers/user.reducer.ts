import { Action, createReducer, on, props } from '@ngrx/store';
import { loadUser } from '../actions/user.actions';
import { User } from '@/_models';


export const userFeatureKey = 'user';

export interface UserState {
  	user: User;
}
export const initialState: UserState = {
  	user: null
};
const userReducer = createReducer(
    initialState,
    on(loadUser, (state, { payload }) => ({ ...state, user: payload }))
);
export function reducer(state: UserState | undefined, action: Action) {
  	return userReducer(state, action);
}
