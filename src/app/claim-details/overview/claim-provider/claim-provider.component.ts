import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-claim-provider',
  templateUrl: './claim-provider.component.html',
  styleUrls: ['./claim-provider.component.scss']
})
export class ClaimProviderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  claimProviderForm: FormGroup;
  billingProviderForm: FormGroup;

  ngOnInit() {
    this.prepareClaimProviderForm();
    this.prepareBillingProviderForm();
  }
  prepareClaimProviderForm() {
    this.claimProviderForm = this.fb.group({
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

  prepareBillingProviderForm() {
    this.billingProviderForm = this.fb.group({
      providerTaxId: [null, Validators.required],
      physicianName: [],
      providerSuffix: [],
      physicianAddress1: [],
      phoneNumber: [],
      physicianAddress2: [],
      groupName: [],
      physicianFirstName: [],
      physicianCity: [],
      physicianLastName: [],
      physicianState: [],
      address: [],
      address2: [],
      city: [],
      state: [],
      zipCode: []
    });
  }

  submit() {
    this.claimProviderForm.markAllAsTouched();
  }
}
