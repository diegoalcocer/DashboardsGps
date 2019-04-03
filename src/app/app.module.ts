import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlertsComponent } from './alerts/alerts.component';
import { MapsComponent } from './maps/maps.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { CurrentDataComponent } from './current-data/current-data.component';
import { LastQuarterComponent } from './last-quarter/last-quarter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AlertsComponent,
    MapsComponent,
    CustomersComponent,
    ReportsComponent,
    CurrentDataComponent,
    LastQuarterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
