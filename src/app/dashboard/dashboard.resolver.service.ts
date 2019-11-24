import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { Payload, DateRange } from '@/_models';

@Injectable()
export class DashBoardResolverService implements Resolve<Observable<Payload[]>> {

	constructor( private dashboardService: DashboardService ) {}

	resolve() {

		const range: DateRange = {
			dateTo 			: null, 
			dateFrom 		: null, 
			dateType 		: null
		};

		return this.dashboardService.fetchDashboardElements( range );
	}
}