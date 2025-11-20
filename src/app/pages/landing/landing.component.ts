import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AppConstants } from '../../core/constants/app.constants';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ButtonModule,
    DropdownModule,
    FormsModule,
    RouterLink,
    TranslateModule
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  public availableLanguages!: any[];
  public selectedLanguage!: any;

  constructor(private readonly translateService: TranslateService) {
    this.availableLanguages = AppConstants.LANGUAGE_OPTIONS;
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
