import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-darkmode-switch',
  standalone: true,
  imports: [
    FormsModule,
    InputSwitchModule
  ],
  templateUrl: './custom-darkmode-switch.component.html',
  styleUrl: './custom-darkmode-switch.component.scss'
})
export class CustomDarkmodeSwitchComponent implements OnInit {
  public isDarkMode = false;

  public ngOnInit(): void {
    const savedTheme = localStorage.getItem(AppConstants.THEME_KEY);
    this.isDarkMode = savedTheme === AppConstants.DARK_THEME_KEY;
    document.documentElement.classList.toggle(AppConstants.DARK_THEME_KEY);
    this.setPrimeNgTheme(this.isDarkMode);
  }

  public toggleDarkMode(isDark: boolean) {
    document.documentElement.classList.toggle(AppConstants.DARK_THEME_KEY);
    localStorage.setItem(AppConstants.THEME_KEY, isDark ? AppConstants.DARK_THEME_KEY : AppConstants.LIGHT_THEME_KEY);
    this.setPrimeNgTheme(isDark);
  }
  
  private setPrimeNgTheme(isDark: boolean): void {
    const themeLink = document.getElementById('primeng-theme') as HTMLLinkElement;
    themeLink.href = isDark
      ? 'assets/themes/aura-dark/theme.css'
      : 'assets/themes/aura-light/theme.css';
  }
}
