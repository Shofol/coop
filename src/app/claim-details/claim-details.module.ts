import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimDetailsComponent } from './claim-details.component';
import { ClaimDetailRoutingModule } from './claim-details.routes';
import { MatExpansionModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatIconModule, MatInputModule, MatTooltipModule, MatError } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClaimSharedModule } from '../shared/claim.shared.module';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { DocumentComponent } from './document/document.component';
import { ResourceComponent } from './resource/resource.component';
import { ClaimComponent } from './overview/claim/claim.component';
import { EmployeeComponent } from './overview/employee/employee.component';
import { PatientComponent } from './overview/patient/patient.component';
import { ClaimProviderComponent } from './overview/claim-provider/claim-provider.component';
import { BatchInfoComponent } from './overview/batch-info/batch-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClaimDetailsComponent, OverviewComponent, DetailsComponent, DocumentComponent, ResourceComponent, ClaimComponent, EmployeeComponent, PatientComponent, ClaimProviderComponent, BatchInfoComponent],
  imports: [
    CommonModule,
    ClaimSharedModule,
    ClaimDetailRoutingModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display',
        totalMessage: 'total',
        selectedMessage: 'selected'
      }
    }),
    MatTooltipModule,
  ]
})
export class ClaimDetailsModule { }
