import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { updateDashMeasure, shiftDashDate } from '../actions/dashboard.actions';
import { AppState } from '../reducers';
import { DateRange } from '@/_models';
import { DashboardService } from '@/dashboard/dashboard.service';

@Injectable()
export class DashboardEffects {
    constructor(private action$: Actions,
                private store: Store<AppState>,
                private dashboardService: DashboardService) {}

    LoadDashInfo$ = createEffect(() =>
        this.action$.pipe(
                ofType(shiftDashDate, updateDashMeasure),
                withLatestFrom(this.store, (action, state) => state.dashboard.dashDate),
                tap((range: DateRange) => this.dashboardService.getInfo( range ).subscribe() )

            ), { dispatch: false }
        );
}
