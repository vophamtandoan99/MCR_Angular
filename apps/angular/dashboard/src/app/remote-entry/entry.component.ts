import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../layout/layout.component';

@Component({
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent],
  selector: 'app-dashboard-entry',
  template: `<app-dashboard-layout></app-dashboard-layout>`,
})
export class RemoteEntryComponent {}
