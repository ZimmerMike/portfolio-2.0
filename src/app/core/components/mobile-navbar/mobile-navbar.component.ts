import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    DockModule
  ],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss'
})
export class MobileNavbarComponent {
  @Input() items!: MenuItem[];
}
