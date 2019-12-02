import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prepareEmployeeForm();
  }

  prepareEmployeeForm() {

    this.employeeForm = this.fb.group({
      memberId: [null, Validators.required],
      group: [],
      plan: [],
      ssn: [],
      groupDescription: [],
      planDescription: [],
      name: [],
      tocDescription: [],
      address: [],
      address2: [],
      city: [],
      state: [],
      zipCode: []
    });

  }

  submit() {
    this.employeeForm.markAllAsTouched();
  }

}
