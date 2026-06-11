import { Component, inject } from '@angular/core';
import { TDSHeaderComponent } from 'tds-ui/header';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { RouterModule } from '@angular/router';

import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';

import { AuthService } from '@mcro/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TDSHeaderComponent,
    TDSAvatarModule,
    TDSDropDownModule,
    RouterModule,
    TDSBreadCrumbModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  authService = inject(AuthService);
  private router = inject(Router);

  get userEmail(): string | null {
    return localStorage?.getItem('email') ?? '';
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
