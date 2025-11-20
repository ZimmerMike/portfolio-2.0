import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SidebarConstants } from '../../constants/sidebar.constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() sidebarOpen: boolean;
  @Output() itemClick = new EventEmitter<void>();

  
  public items: MenuItem[];

  constructor(
    private readonly router: Router
  ) {
    this.items = SidebarConstants.SIDEBAR_ITEMS;
  }

  public onItemClick(item: MenuItem): void {
    this.router.navigate([item.routerLink]);
    this.itemClick.emit();
  }
}
