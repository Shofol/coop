import { Action, createReducer, on, props } from '@ngrx/store';
import { loadMenu } from '../actions/menu.actions';
import { Menu } from '@/_models';


export const menuFeatureKey = 'menu';

export interface MenuState {
  	menu: Menu[];
}
export const initialState: MenuState = {
  	menu: []
};
const menuReducer = createReducer(
    initialState,
    on(loadMenu, (state, { payload }) => ({ ...state, menu: payload }))
);
export function reducer(state: MenuState | undefined, action: Action) {
  return menuReducer(state, action);
}
