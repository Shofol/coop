import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromMenu from './menu.reducer';
import * as fromUser from './user.reducer';

export interface AppState {

  [fromMenu.menuFeatureKey]: fromMenu.MenuState;
  [fromUser.userFeatureKey]: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromMenu.menuFeatureKey]: fromMenu.reducer,
  [fromUser.userFeatureKey]: fromUser.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
