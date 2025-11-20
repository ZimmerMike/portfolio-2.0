import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SidebarConstants } from '../../constants/sidebar.constants';
import { CustomDarkmodeSwitchComponent } from '../../ui/custom-darkmode-switch/custom-darkmode-switch.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AppConstants } from '../../constants/app.constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    CustomDarkmodeSwitchComponent,
    DropdownModule,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() sidebarOpen: boolean;
  @Output() itemClick = new EventEmitter<void>();

  public availableLanguages: any[];
  public items: MenuItem[];
  public selectedLanguage: any;  

  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService
  ) {
    this.availableLanguages = AppConstants.LANGUAGE_OPTIONS;
    this.items = SidebarConstants.SIDEBAR_ITEMS;
  }

  public onItemClick(item: MenuItem): void {
    this.router.navigate([item.routerLink]);
    this.itemClick.emit();
  }

  public ngOnInit(): void {
    const saved = localStorage.getItem(AppConstants.LANG_KEY);
    this.selectedLanguage = saved || this.translateService.currentLang || this.translateService.getDefaultLang();

    this.translateService.use(this.selectedLanguage);
  }

  public switchLanguage(tag: string): void {
    this.translateService.use(tag);
  }
}
