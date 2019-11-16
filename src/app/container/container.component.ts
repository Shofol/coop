import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SidebarService } from '../_services/sidebar.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @ViewChild('menu', { static: false }) menuComponent: MenuComponent;
  menuToggle: boolean;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.sidebarSize$.subscribe(
      res => {
        this.menuToggle = res;
      }
    );
  }
}
