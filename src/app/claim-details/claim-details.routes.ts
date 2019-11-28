import { Routes, RouterModule } from '@angular/router';
import { ClaimDetailsComponent } from './claim-details.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { DocumentComponent } from './document/document.component';
import { ResourceComponent } from './resource/resource.component';
import { ClaimComponent } from './overview/claim/claim.component';
import { EmployeeComponent } from './overview/employee/employee.component';
import { PatientComponent } from './overview/patient/patient.component';
import { ClaimProviderComponent } from './overview/claim-provider/claim-provider.component';
import { BatchInfoComponent } from './overview/batch-info/batch-info.component';

const routes: Routes = [    
    {
        path: '',
        component: ClaimDetailsComponent,
        children: [
        	{ path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent,  
                children: [
                    { path: '', redirectTo: 'claim', pathMatch: 'full'},
                    { path: 'claim', component: ClaimComponent},  
                    { path: 'employee', component: EmployeeComponent}, 
                    { path: 'patient', component: PatientComponent},   
                    { path: 'claim-provider', component: ClaimProviderComponent},  
                    { path: 'batch-info', component: BatchInfoComponent},  
                ]
            },
        	{ path: 'detail', component: DetailsComponent},
            { path: 'document', component: DocumentComponent },
            { path: 'resource', component: ResourceComponent },
        ]
    },
];

export const ClaimDetailRoutingModule = RouterModule.forChild(routes);
