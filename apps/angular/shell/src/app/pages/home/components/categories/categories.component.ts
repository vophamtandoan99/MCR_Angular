import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSCardModule } from 'tds-ui/card';

interface Category {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, TDSCardModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  listData: Array<Category> = [];

  ngOnInit(): void {
    this.listData = [
      {
        icon: 'tdsi-group-fill',
        title: 'Easy to Use',
        description: 'Posuere morbi leo urna molestie.',
      },
      {
        icon: 'tdsi-theme-line',
        title: 'Fresh Design',
        description: 'Semper risus in hendrerit.',
      },
      {
        icon: 'tdsi-export-doc-fill',
        title: 'Well Documented',
        description: 'Non arcu risus quis varius quam quisque.',
      },
      {
        icon: 'tdsi-cart-fill',
        title: 'Ready to Use',
        description: 'Mauris sit amet massa vitae.',
      },
      {
        icon: 'tdsi-auto-awesome-fill',
        title: 'Clean Code',
        description: 'Clean Code',
      },
      {
        icon: 'tdsi-grid-view-line',
        title: 'Responsive Layout',
        description: 'Nulla malesuada pellentesque elit.',
      },
    ];
  }
}
