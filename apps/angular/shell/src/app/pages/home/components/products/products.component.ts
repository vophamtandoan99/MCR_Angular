import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSCardModule } from 'tds-ui/card';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSListModule } from 'tds-ui/list';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, TDSCardModule, TDSButtonModule, TDSListModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  datas = [
    {
      header: 'Free',
      img: '../../../../../assets/images/free.svg',
      price: '$0',
      notes: [
        'Responsive Layout',
        'Unlimited Push Messages',
        '50 Support Ticket',
        'Free Shipping',
      ],
    },
    {
      header: 'Startup',
      img: '../../../../../assets/images/startup.svg',
      price: '$1',
      notes: [
        'Responsive Layout',
        'Unlimited Push Messages',
        '50 Support Ticket',
        'Free Shipping',
      ],
    },
    {
      header: 'Enterprise',
      img: '../../../../../assets/images/enterprise.svg',
      price: '$5',
      notes: [
        'Responsive Layout',
        'Unlimited Push Messages',
        '50 Support Ticket',
        'Free Shipping',
      ],
    },
  ];
}
