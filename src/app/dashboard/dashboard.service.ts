import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payload, DateRange } from '@/_models';
import { dashUrl, reminderUrl, todoUrl } from '@/_helpers';
import { AuthenticationService } from '@/_services';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@/state/reducers';
import { loadDashInfo, loadTodos, loadReminders } from '@/state/actions/dashboard.actions';
import { UserStats } from '@/_contracts/userstats.contract';
import { Wrapper } from '@/_contracts/wrapper.contract';
import { Pagination } from '@/_contracts/pagination.contract';
import { Edge } from '@/_contracts/edge.contract';

@Injectable({
  	providedIn: 'root'
})
export class DashboardService {
	
	constructor(private http 	 : HttpClient,
				private store 	 : Store<AppState>,
				private auth 	 : AuthenticationService ) { }

	public fetchDashboardElements( range: DateRange ) : Observable<Payload[]> {

		const gather$ = forkJoin([ this.fetchInfo( range ), this.fetchTodos(), this.fetchReminders()]);

		return gather$.pipe(

			tap(([ info, todo, remi ]) => {

				if( info ) { this.store.dispatch( loadDashInfo( 	{ payload: info.genericbody } ) ); }
				if( todo ) { this.store.dispatch( loadTodos( 		{ payload: todo.genericbody } ) ); }
				if( remi ) { this.store.dispatch( loadReminders( 	{ payload: remi.genericbody } ) ); }
			})
		);
	}

	public getInfo( range: DateRange ) : Observable<Payload> {

		return this.fetchInfo( range ).pipe(
			
			tap(res => {

				if( res ) { this.store.dispatch(loadDashInfo({ payload: res.genericbody })) }
			})
		);
	}

	private fetchInfo( range: DateRange ) : Observable<Payload> { 

		const payload = new Wrapper( ( new UserStats( range ) ).payload, this.auth.getAccessObject() );
		
		return this.http.post<Payload>(dashUrl, payload); 
	}

	private fetchTodos() : Observable<Payload> { 

		const filter = new Edge( "iParentid", "int", " = ", "", this.auth.getAccessObject().userid, 0);

		const args = { 

			filters 	: filter,
			data    	: "",
			global  	: "",  
			sort   		: "",
			search    	: null,
			records   	: 10,   
			page      	: 1
		}

		const payload = new Wrapper( ( new Pagination( args ) ), this.auth.getAccessObject() );
		
		return this.http.post<Payload>(todoUrl, payload); 
	}

	private fetchReminders() : Observable<Payload> { 

		const filter = new Edge( "iParentid", "int", " = ", "", this.auth.getAccessObject().userid, 0);

		const args = { 

			filters 	: filter,         
			data    	: "",
			global  	: "",  
			sort   		: "",
			search    	: null,
			records   	: 10,   
			page      	: 1
		}

		const payload = new Wrapper( ( new Pagination( args ) ), this.auth.getAccessObject() );
		
		return this.http.post<Payload>(reminderUrl, payload); 
	}
}
