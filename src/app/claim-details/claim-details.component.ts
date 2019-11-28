import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { SidebarService } from '../_services/sidebar.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClaimDetailsComponent implements OnInit {

  largeMenu: boolean;
  activeTab = 'overview';

  constructor(
    private route: ActivatedRoute,
    private _sideBarService: SidebarService,
    private router: Router
  ) { }



  ngOnInit() {
    this._sideBarService.disableFullSizeSidebar();
    this._sideBarService.sidebarSize$.subscribe(
      res => {
        this.largeMenu = res;
      }
    );

  }

  changeTab(event) {
    this.activeTab = event.target.id;
    this.router.navigate(['claim-details', this.activeTab])
  }

  back() {
    this.router.navigate(['/my-claims']);
  }

}
