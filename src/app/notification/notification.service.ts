import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payload } from '@/_models';
import { AuthenticationService } from '@/_services';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@/state/reducers';
import { Wrapper } from '@/_contracts/wrapper.contract';
import { Pagination } from '@/_contracts/pagination.contract';
import { Edge } from '@/_contracts/edge.contract';
import { notificationsUrl } from '@/_helpers';
import { loadNotifications } from '@/state/actions/application.actions';

@Injectable({
  	providedIn: 'root'
})
export class NotificaionService {
	
	constructor(private http 	 : HttpClient,
				private store 	 : Store<AppState>,
                private auth 	 : AuthenticationService ) { }

	public getNotifications() : Observable<Payload> {

		return this.fetchNotifications().pipe(
			
			tap(res => {

				if( res ) { this.store.dispatch(loadNotifications({ payload: res.genericbody })) }
			})
		);
	}

	private fetchNotifications() : Observable<Payload> { 

		const filter = [
            new Edge( "iParentid",    "int", " = ", "", this.auth.getAccessObject().userid, 0),
            new Edge( "iEventTypeID", "int", " = ", " and ", 1, 1)
        ]

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
		
		return this.http.post<Payload>(notificationsUrl, payload); 
	}
}
