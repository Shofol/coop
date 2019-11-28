import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  claimId = null;
  searchedResults = ['Analytics Ready for review', 'Analytics in progress', 'Analytics Error'];
  summaryActiveTab = 'assigned';
  rows = [];
  selected = [];
  contacts = [{ name: 'Billing', number: '123-123-1239' }, { name: 'Headquarters', number: '123-123-1239' }];
  assignes = [{ name: 'Mason Watkins', issues: ['#1', '#2', '#3'] },
  { name: 'Brandon Stevens', issues: ['#1', '#2', '#3'] },
  { name: 'Isaiah Lynch', issues: ['#1', '#2', '#3'] }]
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  moreInfoModalDisplay = false;
  reassignModalDisplay = false;

  constructor(private route: ActivatedRoute) {   
    this.fetch(data => {
    this.rows = data;
  }); }

  ngOnInit() {
    this.route.queryParams.subscribe(
      param => {
        this.claimId = param.claimID;
      }
    );
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/claimEdits.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  fetchAssignedClaims(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/assignedClaimEdits.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  changeSummaryTab(event) {
    this.summaryActiveTab = event.target.id;
    if (event.target.id === 'completed') {
      this.fetchAssignedClaims(data => {
        this.rows = data;
      });
    }
  }
  
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
    if (event.type === 'click') {
      // this._router.navigate(['/claim-details'], { queryParams: { claimID: event.row.claimId } });
    }
  }

  showMoreInfo(row) {
    this.moreInfoModalDisplay = true;
  }
  closeMoreInfo() {
    this.moreInfoModalDisplay = false;
  }

  showReassignModal(person) {
    this.reassignModalDisplay = true;
  }
  closeReassignModal() {
    this.reassignModalDisplay = false;
  }

}
