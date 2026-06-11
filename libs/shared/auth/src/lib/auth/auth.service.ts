// libs/shared/auth/src/lib/auth.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isAuthenticated = signal<boolean>(
    localStorage.getItem('isLoggedIn') === 'true' &&
      !!localStorage.getItem('email')
  );

  public isAuthenticated = this._isAuthenticated.asReadonly();

  login(email: string) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('email', email);
    this._isAuthenticated.set(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
    this._isAuthenticated.set(false);
  }
}
