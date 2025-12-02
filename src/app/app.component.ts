import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

// PrimeNG
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppConstants } from './core/constants/app.constants';

// Animations
import { rootRouteAnimations } from './core/animations/root-route.animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputSwitchModule,
    RouterOutlet
  ],
  animations: [rootRouteAnimations],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private readonly translateService: TranslateService) {
    this.initializeDefaultLanguage();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  private initializeDefaultLanguage(): void {
    this.translateService.setDefaultLang(AppConstants.ES_KEY);
  }
}
