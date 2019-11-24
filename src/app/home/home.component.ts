import { Component, OnInit } from '@angular/core';
import { User } from '@/_models';
import { Store, select } from '@ngrx/store';
import { AppState } from '@/state/reducers';
import { getUser } from '@/state/selectors/user.selector';
import { Observable } from 'rxjs';
import { AuthenticationService, SidebarService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser$: Observable<User>;

    constructor(public authenticationService: AuthenticationService,
                // private sidebarService: SidebarService,
				private store: Store<AppState>) {
        this.currentUser$ = this.store.pipe(select(getUser));
    }

    ngOnInit() {
        // this.sidebarService.enableFullSizeSidebar();
    }

    ngOnDestroy() {
        // this.currentUser$.unsubscribe();
        // TODO https://medium.com/@stodge/ngrx-common-gotchas-8f59f541e47c
    }
}
