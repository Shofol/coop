import { createAction, props } from '@ngrx/store';
import { Notifier } from '@/_models/notfier';

export const toggleLoading      = createAction( '[Application] Toggle Loading',     props<{ payload: boolean  }>()  );
export const loadNotifications  = createAction( '[Application] Load Notifications', props<{ payload: Notifier[] }>() );
