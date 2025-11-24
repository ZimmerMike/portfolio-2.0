import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

// Prime Icons
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { AppConstants } from '../../core/constants/app.constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public availableLanguages: any[];
  public selectedLanguage: any;

  constructor(private readonly translateService: TranslateService) {
    this.availableLanguages = AppConstants.LANGUAGE_OPTIONS;
    this.sidebarOpen = false;
  }

  public ngOnInit(): void {
    const saved = localStorage.getItem(AppConstants.LANG_KEY);
    this.selectedLanguage = saved || this.translateService.currentLang || this.translateService.getDefaultLang();

    this.translateService.use(this.selectedLanguage);
  }

  public switchLanguage(tag: string): void {
    this.translateService.use(tag);
  }
  public sidebarOpen: boolean;


  public toggleSidebar(open?: boolean): void {
    this.sidebarOpen = open ?? !this.sidebarOpen;
  }
  
  public onSidebarItemClick(): void {
    this.toggleSidebar(false);
  }
}
