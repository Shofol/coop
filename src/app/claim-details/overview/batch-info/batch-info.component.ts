import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-batch-info',
  templateUrl: './batch-info.component.html',
  styleUrls: ['./batch-info.component.scss']
})
export class BatchInfoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  batchInfoForm: FormGroup;

  ngOnInit() {
    this.prepareBatchInfoForm();
  }
  prepareBatchInfoForm() {
    this.batchInfoForm = this.fb.group({
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
    this.batchInfoForm.markAllAsTouched();
  }


}
