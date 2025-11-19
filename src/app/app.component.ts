import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

// PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppConstants } from './core/constants/app.constants';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    InputSwitchModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public isDarkMode = false;

  public availableLanguages!: any[];
  public selectedLanguage!: any;

  constructor(private readonly translateService: TranslateService) {
    this.availableLanguages = AppConstants.LANGUAGE_OPTIONS;
    this.initializeDefaultLanguage();
  }

  public ngOnInit(): void {
    const savedTheme = localStorage.getItem(AppConstants.THEME_KEY);
    this.isDarkMode = savedTheme === AppConstants.DARK_THEME_KEY;
    document.documentElement.classList.toggle(AppConstants.DARK_THEME_KEY, this.isDarkMode);

    const saved = localStorage.getItem(AppConstants.LANG_KEY);
    this.selectedLanguage = saved || this.translateService.currentLang || this.translateService.getDefaultLang();

    this.translateService.use(this.selectedLanguage);
  }

  private initializeDefaultLanguage(): void {
    this.translateService.setDefaultLang(AppConstants.ES_KEY);
  }

  public switchLanguage(tag: string): void {
    this.translateService.use(tag);
  }

  public toggleDarkMode(isDark: boolean) {
    this.isDarkMode = isDark;
    // aquí aplicas tu lógica real de dark mode
    document.documentElement.classList.toggle(AppConstants.DARK_THEME_KEY, isDark);
    localStorage.setItem(AppConstants.THEME_KEY, isDark ? AppConstants.DARK_THEME_KEY : AppConstants.LIGHT_THEME_KEY);
  }
}
