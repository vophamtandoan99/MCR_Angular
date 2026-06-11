import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TDSMenuModule } from 'tds-ui/menu';
import { TDSMenuDTO } from 'tds-ui/menu';

@Component({
  selector: 'app-sidbars',
  standalone: true,
  imports: [CommonModule, TDSMenuModule],
  templateUrl: './sidbars.component.html',
  styleUrl: './sidbars.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'flex-none w-auto max-w-xs',
  },
})
export class SidbarsComponent {
  lstMenu: Array<TDSMenuDTO> = [
    {
      name: 'Home',
      icon: 'tdsi-home-fill',
    },
    {
      name: 'Icon',
      icon: 'tdsi-web-template-fill',
    },
    {
      name: 'Navigation',
      icon: 'tdsi-link-fill',
      listChild: [
        {
          name: 'Menu',
          link: '/components/menu/vi',
        },
        {
          name: 'Pagination',
        },
        {
          name: 'Steps',
        },
      ],
    },
  ];
}
