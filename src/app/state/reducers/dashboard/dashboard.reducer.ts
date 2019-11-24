import { Action, createReducer, on, props } from '@ngrx/store';
import { loadDashInfo, 
         updateDashMeasure, 
         shiftDashDate, 
         resetDashDate,
         loadReminders,
         loadTodos} from '../../actions/dashboard.actions';
import { Dashboard, DateRange } from '@/_models';
import { shiftDateRange, updateDateRange, generateNewDateTo } from './dashboard.helper';
import { Reminder } from '@/_models/reminder';
import { Todo } from '@/_models/todo';


export const userFeatureKey = 'dashboard';

export interface DashboardState {
    dashInfo    : Dashboard;
    dashDate    : DateRange;  
    todos       : Todo[];
    reminders   : Reminder[];
}
export const initialState: DashboardState = {
    dashInfo    : null,
    dashDate    : new DateRange(new Date().setHours(12,0,0,0), generateNewDateTo(1, new Date().setHours(12,0,0,0)).getTime(), 2),
    todos       : [],
    reminders   : []
};
const dashboardReducer = createReducer(
    initialState,
    on(loadDashInfo,        (state, { payload }) => ({ ...state, dashInfo   : payload })),
    on(loadTodos,           (state, { payload }) => ({ ...state, todos      : payload })),
    on(loadReminders,       (state, { payload }) => ({ ...state, reminders  : payload })),
    on(shiftDashDate,       (state, { payload }) => ({ ...state, dashDate   : shiftDateRange( state, payload ) })),
    on(resetDashDate,       (state, {         }) => ({ ...state, dashDate   : initialState.dashDate })),
    on(updateDashMeasure,   (state, { payload }) => ({ ...state, dashDate   : updateDateRange( state, payload ) }))
);
export function reducer(state: DashboardState | undefined, action: Action) {
    return dashboardReducer(state, action);
}
