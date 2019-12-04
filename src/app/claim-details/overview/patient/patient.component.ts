import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  patientForm: FormGroup;

  ngOnInit() {
    this.preparePatientForm();
  }
  preparePatientForm() {
    this.patientForm = this.fb.group({
      memberId: [null, Validators.required],
      patientId: [],
      age: [],
      ssn: [],
      accountNumber: [],
      planDescription: [],
      name: [],
      sex: [],
      dob: [],
      relationship: [],
      terminationDate: [],
      address: [],
      address2: [],
      city: [],
      state: [],
      zipCode: []
    });
  }

  submit() {
    this.patientForm.markAllAsTouched();
  }


}
