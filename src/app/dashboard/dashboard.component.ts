import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { Dashboard, DateRange } from '@/_models';
import { Store, select } from '@ngrx/store';
import { AppState } from '@/state/reducers';
import { getDashInfo, getDashDate, getTodos, getReminders } from '@/state/selectors/dashboard.selector';
import { shiftDashDate, updateDashMeasure, resetDashDate } from '@/state/actions/dashboard.actions';
import { Reminder } from '@/_models/reminder';
import { Todo } from '@/_models/todo';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	public dashInfo$ 	: Observable<Dashboard>;
	public dashDate$ 	: Observable<DateRange>;
	public todos$ 		: Observable<Todo[]>;
	public reminders$ 	: Observable<Reminder[]>;

	public tenors 		: string[] 	= [ 'Week', 'Month', 'Quarter', 'Year', 'All Time' ];

	constructor(public 	dashboardService: DashboardService,
				private store: Store<AppState>) { 

		this.dashInfo$ 	= this.store.pipe(select(getDashInfo));
		this.dashDate$ 	= this.store.pipe(select(getDashDate));
		this.todos$ 	= this.store.pipe(select(getTodos));
		this.reminders$ = this.store.pipe(select(getReminders));
	}

    ngOnInit() {
		this.store.dispatch(resetDashDate());
	}

	changeDateRange( direction: string ) {
		this.store.dispatch(shiftDashDate({ payload: direction }));
	}

	changeDateMeasure( type: number ) {
		this.store.dispatch(updateDashMeasure({ payload: type }));
	}
	
	ngOnDestroy() {
		// this.dashInfo$.unsubscribe();
		// this.dashDate$.unsubscribe();
	}
}
