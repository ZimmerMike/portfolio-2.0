import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

// PrimeNG
import { DockModule } from 'primeng/dock';

// Prime Icons
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DockModule,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public sidebarOpen: boolean;

  constructor() {

    this.sidebarOpen = false;
  }

  public toggleSidebar(open?: boolean): void {
    this.sidebarOpen = open ?? !this.sidebarOpen;
  }
  
  public onSidebarItemClick(): void {
    this.toggleSidebar(false);
  }
}
