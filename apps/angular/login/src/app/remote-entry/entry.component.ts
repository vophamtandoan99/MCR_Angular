import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoginComponent],
  selector: 'app-login-entry',
  template: `<app-login></app-login>`,
})
export class RemoteEntryComponent {}
