import { Component } from '@angular/core';
import { getNotifications } from '@/state/selectors/application.selector';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@/state/reducers';
import { Notifier } from '@/_models/notfier';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

    public notifications$ : Observable<Notifier[]>;

    constructor( private store: Store<AppState> ) {

        this.notifications$ = this.store.pipe(select(getNotifications));
    }
}
