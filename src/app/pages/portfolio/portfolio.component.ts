import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

// PrimeNG
import { DockModule } from 'primeng/dock';

// Prime Icons
import { PrimeIcons } from 'primeng/api';
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';
import { MobileNavbarComponent } from '../../core/components/mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DockModule,
    MobileNavbarComponent,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public items!: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'SIDEBAR.HOME',
        icon: PrimeIcons.HOME,
        routerLink: '/'
      },
      {
        label: 'SIDEBAR.PROJECTS',
        icon: PrimeIcons.CODE,
        routerLink: 'projects'
      },
      {
        label: 'SIDEBAR.EXPERIENCE',
        icon: PrimeIcons.BRIEFCASE,
        routerLink: 'experience'
      },
      {
        label: 'SIDEBAR.EDUCATION',
        icon: PrimeIcons.BOOK,
        routerLink: 'education'
      },
      {
        label: 'SIDEBAR.CERTIFICATIONS',
        icon: PrimeIcons.CHECK_CIRCLE,
        routerLink: 'certifications'
      },
      {
        label: 'SIDEBAR.CONTACT',
        icon: PrimeIcons.ENVELOPE,
        routerLink: 'contact'
      }
    ];
  }
}
