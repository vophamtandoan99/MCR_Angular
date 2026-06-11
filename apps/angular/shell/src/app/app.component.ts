import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
  private router = inject(Router);
}
