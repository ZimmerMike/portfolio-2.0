import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { SidebarConstants } from '../../constants/sidebar.constants';
import { CustomDarkmodeSwitchComponent } from '../custom-darkmode-switch/custom-darkmode-switch.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AppConstants } from '../../constants/app.constants';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    CustomDarkmodeSwitchComponent,
    DropdownModule,
    FormsModule,
    SidebarModule,
    TranslateModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() visible: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();

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

  public ngOnInit(): void {
    const saved = localStorage.getItem(AppConstants.LANG_KEY);
    this.selectedLanguage = saved || this.translateService.currentLang || this.translateService.getDefaultLang();

    this.translateService.use(this.selectedLanguage);
  }

  public onVisibleChange(value: boolean): void {
    this.visible = value;
    this.visibleChange.emit(value);
  } 
  
  public onHide(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  public onItemClick(item: MenuItem): void {
    this.router.navigate([item.routerLink]);
    this.visibleChange.emit(false);
  }

  public switchLanguage(tag: string): void {
    this.translateService.use(tag);
  }
}
