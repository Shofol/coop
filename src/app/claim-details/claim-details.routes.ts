import { Routes, RouterModule } from '@angular/router';
import { ClaimDetailsComponent } from './claim-details.component';

const routes: Routes = [
    {
        path: '',
        component: ClaimDetailsComponent,
        // children: [

        // 	{ path: '', redirectTo: 'home', pathMatch: 'full' },
        // 	{ path: 'home', component: HomeComponent },
        // 	{ path: 'claim-details', loadChildren: './claim-details/claim-details.module#ClaimDetailsModule' },
        // 	{ path: 'dashboard', component: DashboardComponent, /* resolve: { dashboard: DashBoardResolverService } */ },
        // 	{ path: 'my-claims', component: MyClaimsComponent }
        // ]
    },
    // { path: 'login', component: LoginComponent },
    // { path: '**', redirectTo: '' }
];

export const ClaimDetailRoutingModule = RouterModule.forChild(routes);
