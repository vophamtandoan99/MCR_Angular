import { Component, inject } from '@angular/core';
import { TDSHeaderComponent } from 'tds-ui/header';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@mcro/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TDSHeaderComponent,
    TDSAvatarModule,
    TDSDropDownModule,
    NgIf,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  protected authService = inject(AuthService);

  get userEmail(): string | null {
    return localStorage?.getItem('email') ?? '';
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  protected onLogout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  }

  protected onLogin(): void {
    window.location.href = '/login';
  }
}
