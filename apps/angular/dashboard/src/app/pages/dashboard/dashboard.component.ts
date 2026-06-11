import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSCardModule } from 'tds-ui/card';
import { TDSSafeAny } from 'tds-ui/shared/utility';

import { TDSTableModule } from 'tds-ui/table';

import { TDSButtonModule } from 'tds-ui/button';
import { TDSDropDownModule } from 'tds-ui/dropdown';

import { TDSSliderModule } from 'tds-ui/slider';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TDSCardModule,
    TDSTableModule,
    TDSButtonModule,
    TDSDropDownModule,
    TDSSliderModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  listOfData: Array<TDSSafeAny> = [
    {
      name: 'Bamboo Watch',
      age: 18,
      company: 'Watch',
    },
    {
      name: 'Black Watch',
      age: 28,
      company: 'Watch',
    },
    {
      name: 'Bamboo Watch',
      age: 18,
      company: 'Watch',
    },
    {
      name: 'Black Watch',
      age: 28,
      company: 'Watch',
    },
    {
      name: 'Bamboo Watch',
      age: 18,
      company: 'Watch',
    },
    {
      name: 'Black Watch',
      age: 28,
      company: 'Watch',
    },
    {
      name: 'Bamboo Watch',
      age: 18,
      company: 'Watch',
    },
    {
      name: 'Black Watch',
      age: 28,
      company: 'Watch',
    },
    {
      name: 'Bamboo Watch',
      age: 18,
      company: 'Watch',
    },
    {
      name: 'Black Watch',
      age: 28,
      company: 'Watch',
    },
    {
      name: 'Bamboo Watch',
      age: 18,
      company: 'Watch',
    },
    {
      name: 'Black Watch',
      age: 28,
      company: 'Watch',
    },
    {
      name: 'Bamboo Watch',
      age: 18,
      company: 'Watch',
    },
    {
      name: 'Black Watch',
      age: 28,
      company: 'Watch',
    },
  ];
}
