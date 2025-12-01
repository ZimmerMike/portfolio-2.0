import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-darkmode-switch',
  standalone: true,
  imports: [FormsModule, InputSwitchModule],
  templateUrl: './custom-darkmode-switch.component.html',
  styleUrls: ['./custom-darkmode-switch.component.scss'],
})
export class CustomDarkmodeSwitchComponent implements OnInit, OnDestroy {
  public isDarkMode = false;
  private lastClickEvent: MouseEvent | null = null;
  private sub?: Subscription;

  constructor(private themeService: ThemeService) {
    
  }

  /**
   * @description Runs once after component initialization to perform setup tasks.
   */
  public ngOnInit(): void {
    this.sub = this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  /**
   * @description Runs just before the component is destroyed to clean up resources and subscriptions.
   */
  public ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /**
   * @description Handles native click events to capture the last click on the theme switch element.
   * @param {MouseEvent} ev - The click event triggered on the host element.
   */
  @HostListener('click', ['$event'])
  onNativeClick(ev: MouseEvent) {
    const target = ev.target as HTMLElement;
    if (target.closest('#theme-switch')) {
      this.lastClickEvent = ev;
    }
  }

  /**
   * @description Toggles dark mode and applies the stored click position for the ripple effect.
   * @param {boolean} isDark - Whether dark mode should be enabled.
   */
  public toggleDarkMode(isDark: boolean): void {
    this.themeService.setDarkMode(isDark, this.lastClickEvent ?? undefined);
    this.lastClickEvent = null;
  }
}
