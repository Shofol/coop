import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyClaimsComponent } from './my-claims/my-claims.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { AuthGuard } from './_helpers';
import { DashBoardResolverService } from './dashboard/dashboard.resolver.service';
import { NotificationResolverService } from './notification/notification.resolver.service';

const routes: Routes = [
  	{ 
		path 			: '', 
		component 		: ContainerComponent,
		canActivate 	: [AuthGuard],
		// resolve 		: { notifications: NotificationResolverService },
		children 		: [
			
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'claim-details', component: ClaimDetailsComponent },
			{ path: 'dashboard', component: DashboardComponent, /* resolve: { dashboard: DashBoardResolverService } */ },
			{ path: 'my-claims', component: MyClaimsComponent }
		]
	},
	{ path: 'login', component: LoginComponent },
	{ path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
