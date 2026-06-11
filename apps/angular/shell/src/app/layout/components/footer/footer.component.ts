import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSLayoutModule } from 'tds-ui/layout';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TDSLayoutModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public year: number = new Date().getFullYear();
}
