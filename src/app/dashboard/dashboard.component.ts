import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  date = 'This Month: Oct 1,2019 - Oct 31,2019';
  tenors = ['Week', 'Month', 'Quarter', 'Year', 'All time'];
  selectedTenor = 'Month';
  constructor() { }

  ngOnInit() {
  }

}
