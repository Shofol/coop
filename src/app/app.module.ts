import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyClaimsComponent } from './my-claims/my-claims.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state/reducers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from '@/_helpers';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { NotificationComponent } from './notification/notification.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatIconModule, MatInputModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SidebarService } from './_services/sidebar.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertComponent } from './alert/alert.component';
import { DashBoardResolverService } from './dashboard/dashboard.resolver.service';
import { environment } from 'environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoaderInterceptor } from './_helpers/loader.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './state/effects/dashboard.effects';
import { NotificationResolverService } from './notification/notification.resolver.service';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		MyClaimsComponent,
		ClaimDetailsComponent,
		ContainerComponent,
		LoginComponent,
		HomeComponent,
		MenuComponent,
		NotificationComponent,
		AlertComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		MatExpansionModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatNativeDateModule,
		MatMomentDateModule,
		MatIconModule,
		MatInputModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true
			}
		}),
		NgxDatatableModule.forRoot({
			messages: {
				emptyMessage: 'No data to display',
				totalMessage: 'total',
				selectedMessage: 'selected'
			}
		}),
		EffectsModule.forRoot([DashboardEffects]),
		BrowserAnimationsModule,
		MatTooltipModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
		DashBoardResolverService,
		NotificationResolverService,
		SidebarService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
