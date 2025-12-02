import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { BreakpointObserver } from '@angular/cdk/layout';

import { ExperienceEvent } from '../../../core/interfaces/experience-event.interface';

// PrimeNG
import { TimelineModule } from 'primeng/timeline';
import { TranslateModule } from '@ngx-translate/core';
import { ExperienceConstants } from '../../../core/constants/experience.constants';
import { ConditionalAlign } from '../../../core/types/experience-timeline-align.type';
import { CustomInfoCardComponent } from '../../../core/components/custom-info-card/custom-info-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    ButtonModule,
    CustomInfoCardComponent,
    CommonModule,
    TimelineModule,
    TranslateModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit, OnInit {
  @ViewChildren('mobileDesc') mobileDescRefs!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('desktopDesc') desktopDescRefs!: QueryList<ElementRef<HTMLDivElement>>;

  public events: ExperienceEvent[];
  public expanded: boolean[] = [];
  public isTruncated: boolean[] = [];
  public timelineAlign: ConditionalAlign = ExperienceConstants.TIMELINE_ALTERNATE_ALIGN;
  public isMobile = false;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.observeBreakpoints();
  }
  
  @HostListener('window:resize', [])
  onWindowResize(): void {
    setTimeout(() => this.updateTruncation(), 0);
  }

  public ngOnInit(): void {
    const rawEvents: ExperienceEvent[] = ExperienceConstants.JOB_EVENTS;

    this.events = rawEvents.map((e, i) => ({
      ...e,
      idx: i
    })).reverse();

    this.isTruncated = new Array(this.events.length).fill(false);
    this.expanded = new Array(this.events.length).fill(false);
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.updateTruncation(), 0);

    this.mobileDescRefs.changes.subscribe(() => {
      setTimeout(() => this.updateTruncation(), 0);
    });
    this.desktopDescRefs.changes.subscribe(() => {
      setTimeout(() => this.updateTruncation(), 0);
    });
  }

  public toggleExpand(idx: number): void {
    this.expanded[idx] = !this.expanded[idx];
  }

  private updateTruncation(): void {
    const refs = this.isMobile ? this.mobileDescRefs : this.desktopDescRefs;

    refs.forEach((ref, idx) => {
      const el = ref.nativeElement;
      this.isTruncated[idx] = el.scrollHeight > el.clientHeight + 1;
    });
  }

  private observeBreakpoints(): void {
    this.breakpointObserver
      .observe([ExperienceConstants.MOBILE_BREAKPOINT])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.timelineAlign = this.isMobile ? ExperienceConstants.TIMELINE_LEFT_ALIGN : ExperienceConstants.TIMELINE_ALTERNATE_ALIGN;

        setTimeout(() => this.updateTruncation(), 0);
      });
  }
}
