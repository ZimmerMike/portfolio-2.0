import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

// PrimeNG
import { DockModule } from 'primeng/dock';

// Prime Icons
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DockModule,
    RouterOutlet
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public items!: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Yo',
        icon: PrimeIcons.USER
      },
      {
        label: 'App Store',
        icon: PrimeIcons.CODE
      },
      {
        label: 'Photos',
        icon: PrimeIcons.BRIEFCASE
      },
      {
        label: 'Trash',
        icon: PrimeIcons.BOOK
      },
      {
        label: 'Trash',
        icon: PrimeIcons.CHECK_CIRCLE
      },
      {
        label: 'Trash',
        icon: PrimeIcons.ENVELOPE
      }
    ];
  }
}
