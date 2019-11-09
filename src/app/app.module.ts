import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyClaimsComponent } from './my-claims/my-claims.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { MenuResolverService } from './menu/menu.resolver.service';
import { reducers, metaReducers } from './state/reducers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from '@/_helpers';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppNotificationComponent } from './_components/notification/notification.component';

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
    AppNotificationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatExpansionModule,
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
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MenuResolverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
