import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstants } from '../constants/app.constants';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem(AppConstants.THEME_KEY);
    const isDark = savedTheme === AppConstants.DARK_THEME_KEY;

    document.documentElement.classList.toggle('tw-dark', isDark);
    this.setPrimeNgTheme(isDark);
    this.setBrowserThemeColor(isDark);
    this.darkModeSubject.next(isDark);
  }

  /**
   * @description Applies the selected theme mode and triggers theme-related visual effects.
   * @param {boolean} isDark - Whether dark mode should be enabled.
   * @param {MouseEvent} [event] - The event used to position the ripple animation.
   */
  public setDarkMode(isDark: boolean, event?: MouseEvent): void {
    this.darkModeSubject.next(isDark);

    localStorage.setItem(
      AppConstants.THEME_KEY,
      isDark ? AppConstants.DARK_THEME_KEY : AppConstants.LIGHT_THEME_KEY
    );

    this.setPrimeNgTheme(isDark);
    this.setBrowserThemeColor(isDark);
    this.applyRipple(isDark, event);
  }

  /**
   * @description Switches the PrimeNG stylesheet according to the active theme mode.
   * @param {boolean} isDark - Whether dark mode should be enabled.
   */
  private setPrimeNgTheme(isDark: boolean): void {
    const themeLink = document.getElementById('primeng-theme') as HTMLLinkElement | null;
    if (!themeLink) return;

    themeLink.href = isDark
      ? 'assets/themes/aura-dark/theme.css'
      : 'assets/themes/aura-light/theme.css';
  }

  /**
   * @description Executes the theme ripple animation and updates CSS variables based on the theme.
   * @param {boolean} isDark - Whether dark mode should be enabled.
   * @param {MouseEvent} [event] - The event used to position the ripple animation.
   */
  private applyRipple(isDark: boolean, event?: MouseEvent): void {
    const root = document.documentElement;

    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;

    root.style.setProperty('--ripple-x', `${x}px`);
    root.style.setProperty('--ripple-y', `${y}px`);

    const rippleColor = isDark ? '#020617' : '#f9fafb';
    root.style.setProperty('--ripple-color', rippleColor);

    root.classList.toggle('tw-dark', isDark);

    root.classList.add('theme-ripple');

    const onAnimationEnd = (ev: AnimationEvent) => {
      if (ev.animationName !== 'theme-ripple-expand') return;
      root.classList.remove('theme-ripple');
      root.removeEventListener('animationend', onAnimationEnd);
    };

    root.addEventListener('animationend', onAnimationEnd);
  }

  /**
   * @description Sets meta tag color.
   * @param {boolean} isDark - Whether dark mode should be enabled.
   */
  private setBrowserThemeColor(isDark: boolean): void {
    const metaThemeColor = document.getElementById('meta-theme-color') as HTMLMetaElement | null;
    if (!metaThemeColor) return;

    metaThemeColor.content = isDark ? '#020617' : '#f9fafb';
  }
}
