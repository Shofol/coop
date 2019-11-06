import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyClaimsComponent } from './my-claims/my-claims.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';

const routes: Routes = [
  	{ 
		path: '', 
		component: ContainerComponent,
		// canActivate: [AuthGuard],
		// resolve: { message: GenericResolver },
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'claim-details', component: ClaimDetailsComponent },
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'my-claims', component: MyClaimsComponent }
		]
	}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
