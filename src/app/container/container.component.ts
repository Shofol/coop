import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SidebarService } from '../_services/sidebar.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],

})
export class ContainerComponent implements OnInit {

  // @ViewChild('menu', { static: false }) menuComponent: MenuComponent;
  menuToggle = true;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    // this.sidebarService.enableFullSizeSidebar();
    this.sidebarService.sidebarSize$.subscribe(
      res => {
        setTimeout(() => {
          if (res !== null && res !== undefined) {
            this.menuToggle = res;
          }
        });
      }
    );
  }
}
