import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';
import * as fromDashboard from './dashboard/dashboard.reducer';
import * as fromApplication from './application/application.reducer';

export interface AppState {

  	"user"        	: fromUser.UserState;
	"dashboard"   	: fromDashboard.DashboardState;
	"application" 	: fromApplication.ApplicationState;  
}

export const reducers: ActionReducerMap<AppState> = {
	"user" 			: fromUser.reducer,
	"dashboard" 	: fromDashboard.reducer,
	"application" 	: fromApplication.reducer 
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
