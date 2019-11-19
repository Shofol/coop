import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class SidebarService {
    constructor() { }

    sidebarSize$ = new BehaviorSubject<any>(true);

    disableFullSizeSidebar() {
        this.sidebarSize$.next(false);
    }

    enableFullSizeSidebar() {
        this.sidebarSize$.next(true);
    }
}
