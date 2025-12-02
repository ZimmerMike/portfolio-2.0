import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-custom-info-card',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    TimelineModule,
    TranslateModule
  ],
  templateUrl: './custom-info-card.component.html',
  styleUrl: './custom-info-card.component.scss'
})
export class CustomInfoCardComponent {
  @Input() header?: string;
  @Input() subheader?: string;
  @Input() styleClass?: string;

  get computedStyleClass(): string {
    const base = 'tw-border-solid tw-bg-white/5 tw-border-black/5 dark:tw-border-white/5';

    return this.styleClass ? `${base} ${this.styleClass}` : base;
  }
}
