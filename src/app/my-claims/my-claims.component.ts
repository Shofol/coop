import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import {
  slideInOutEnterAnimation, slideInOutLeaveAnimation, fadeInOutEnterAnimation,
  fadeInOutLeaveAnimation
} from '../_animations/claims.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-claims',
  templateUrl: './my-claims.component.html',
  styleUrls: ['./my-claims.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [useAnimation(slideInOutEnterAnimation)]),
      transition(':leave', [useAnimation(slideInOutLeaveAnimation)])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [useAnimation(fadeInOutEnterAnimation)]),
      transition(':leave', [useAnimation(fadeInOutLeaveAnimation)])
    ])
  ]
})
export class MyClaimsComponent {

  showFilterMenu = false;
  totalEdits = [
    { checked: false }, { checked: false }, { checked: false },
    { checked: false }, { checked: false }, { checked: false },
    { checked: false }, { checked: false }, { checked: false },
    { checked: false }, { checked: false }, { checked: false }];

  rows = [];
  selected = [];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  activeTab = 'assigned';

  constructor(
    private _router: Router
  ) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/claims.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    // console.log('Activate Event', event);
    if (event.type === 'click') {
      this._router.navigate(['/claim-details'], { queryParams: { claimID: event.row.claimId } });
    }
  }

  changeTab(event) {
    this.activeTab = event.target.id;
  }

  onAllSelect() {
    this.totalEdits.map(edit => { edit.checked = !edit.checked; });
  }

  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  }

}
