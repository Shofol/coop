import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../_services/sidebar.service';
import { AuthenticationService } from '@/_services';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

	public toggle: boolean;
	@Input() set toggleOption(value) {
		if (value !== null && value !== undefined) {
			this.toggle = value;
		}

	}
	constructor(
		private _sidebarService: SidebarService,
		public authenticationService: AuthenticationService) {
		// this.toggle = true;
	}

	ngOnInit() {
		// this._sidebarService.enableFullSizeSidebar();

		// this._sidebarService.sidebarSize$.subscribe(
		// 	res => {
		// 		if (res !== null || res !== undefined) {
		// 			this.toggle = res;
		// 		}
		// 	}
		// );
	}

	expandSidebar() {
		this._sidebarService.enableFullSizeSidebar();
	}

	hideSidebar() {
		this._sidebarService.disableFullSizeSidebar();
	}

}
