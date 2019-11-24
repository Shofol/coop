import { createAction, props } from '@ngrx/store';
import { Dashboard } from '@/_models';
import { Todo } from '@/_models/todo';
import { Reminder } from '@/_models/reminder';

export const loadDashInfo       = createAction( '[Dashboard] Load Dash Info',       props<{ payload: Dashboard  }>() );
export const loadTodos          = createAction( '[Dashboard] Load Todos',           props<{ payload: Todo[]     }>() );
export const loadReminders      = createAction( '[Dashboard] Load Reminders',       props<{ payload: Reminder[] }>() );
export const shiftDashDate      = createAction( '[Dashboard] Shift Dash Date',      props<{ payload: string     }>() );
export const resetDashDate      = createAction( '[Dashboard] Reset Dash Date'                                        );
export const updateDashMeasure  = createAction( '[Dashboard] Update Dash Measure',  props<{ payload: number     }>() );
