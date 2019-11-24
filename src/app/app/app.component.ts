import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/reducers';
import { getLoading } from '../state/selectors/application.selector';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
		// the fade-in/fade-out animation.
		trigger('simpleFadeAnimation', [
	
			// the "in" style determines the "resting" state of the element when it is visible.
			state('in', style({opacity: 0.6})),
		
			// fade in when created. this could also be written as transition('void => *')
			transition(':enter', [
				style({opacity: 0}),
				animate(600 )
			]),
		
			// fade out when destroyed. this could also be written as transition('void => *')
			transition(':leave',
			animate(600, style({opacity: 0})))
		])
	]
})
export class AppComponent {
    
    public loading$: Observable<boolean>;

    constructor(private store: Store<AppState>) {

		this.loading$ = this.store.pipe(select(getLoading));
	}
}
