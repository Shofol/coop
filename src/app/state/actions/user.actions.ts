import { createAction, props } from '@ngrx/store';
import { User } from '@/_models';

export const loadUser = createAction( '[User] Load User', props<{ payload: any }>() );  // props<{ payload: User }
