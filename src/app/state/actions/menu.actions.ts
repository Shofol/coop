import { createAction, props } from '@ngrx/store';
import { Menu } from '@/_models';

export const loadMenu = createAction( '[Menu] Load Menu', props<{ payload: any }>() ); // props<{ payload: Menu[] }
