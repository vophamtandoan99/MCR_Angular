import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSButtonMenuModule } from 'tds-ui/button-menu';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, TDSButtonModule, TDSButtonMenuModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {}
