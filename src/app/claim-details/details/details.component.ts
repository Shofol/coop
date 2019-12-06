import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  claimDetailForm: FormGroup;
  billingProviderForm: FormGroup;

  ngOnInit() {
    this.prepareClaimDetailForm();
  }
  prepareClaimDetailForm() {
    this.claimDetailForm = this.fb.group({
      providerTaxId: [null, Validators.required],
      physicianName: [],
      physicianZipCode: [],
      providerSuffix: [],
      physicianAddress1: [],
      physicianPhone: [],
      groupName: [],
      physicianAddress2: [],
      physicianFax: [],
      physicianFirstName: [],
      physicianCity: [],
      physicianLastName: [],
      physicianState: []
    });
  }

  submit() {
    this.claimDetailForm.markAllAsTouched();
  }

}
