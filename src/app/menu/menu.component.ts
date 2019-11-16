import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../_services/sidebar.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

	public toggle: boolean;

	constructor(
		private _sidebarService: SidebarService) {
		this.toggle = true;
	}

	ngOnInit() {
		this._sidebarService.sidebarSize$.subscribe(
			res => {
				this.toggle = res;
			}
		);
	}

}
