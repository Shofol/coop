import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class SidebarService {
    constructor() { }

    sidebarSize$ = new Subject<any>();

    disableFullSizeSidebar() {
        this.sidebarSize$.next(false);
    }

    enableFullSizeSidebar() {
        this.sidebarSize$.next(true);
    }
}
