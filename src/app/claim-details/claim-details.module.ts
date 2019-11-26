import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimDetailsComponent } from './claim-details.component';
import { ClaimDetailRoutingModule } from './claim-details.routes';
import { MatExpansionModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatIconModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClaimSharedModule } from '../shared/claim.shared.module';

@NgModule({
  declarations: [ClaimDetailsComponent],
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
