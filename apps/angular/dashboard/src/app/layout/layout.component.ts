import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TDSLayoutModule } from 'tds-ui/layout';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidbarsComponent } from './components/sidbars/sidbars.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TDSLayoutModule,
    HeaderComponent,
    FooterComponent,
    SidbarsComponent,
    DashboardComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class DashboardLayoutComponent {}
